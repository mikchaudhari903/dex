// auth/Auth.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../../firebase/firebase'; // Import auth from firebaseConfig
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import { getDatabase, ref, set, get } from 'firebase/database'; // Import Realtime Database functions

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState(null); // State to hold user data from the database

    const signup = async (email, password, name, role) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Add user data to the Realtime Database
            await addUserData(user.uid, email, name, role);
            return user; // Return user data if needed
        } catch (error) {
            console.error("Error during signup:", error);
            throw error; // Rethrow to handle in UI
        }
    };

    const addUserData = async (userId, email, name, role) => {
        const db = getDatabase();
        const userRef = ref(db, `users/${userId}`);

        try {
            await set(userRef, {
                email,
                name,
                role
            });
            console.log("User data added successfully!");
        } catch (error) {
            console.error("Error adding user data:", error);
        }
    };

    const login = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            const role = await fetchUserRole(); // Fetch user role after successful login
            if (role !== 'admin') {
                await logout(); // Log out if not an admin
                throw new Error('Access denied: Admins only.'); // Throw an error
            }
        } catch (error) {
            console.error("Error logging in:", error);
            throw error; // Rethrow to handle in UI
        }
    };

    const logout = () => {
        return signOut(auth);
    };

    // Fetch user role from Realtime Database
    const fetchUserRole = async () => {
        if (!currentUser) return null; // Ensure there's a current user

        const db = getDatabase();
        const userRef = ref(db, `users/${currentUser.uid}`);

        try {
            const snapshot = await get(userRef);
            if (snapshot.exists()) {
                const userData = snapshot.val();
                setUserData(userData); // Set user data in state
                return userData.role; // Return the user's role
            } else {
                console.log("No user data available.");
                setUserData(null);
                return null;
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
            setUserData(null);
            return null;
        }
    };

    // Listen for auth state changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
            if (user) {
                fetchUserRole(); // Fetch user role whenever auth state changes
            } else {
                setUserData(null); // Reset user data on logout
            }
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    const value = { currentUser, userData, signup, login, logout, loading };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
