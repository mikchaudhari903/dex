import React, { useState } from 'react';
import { useAuth } from '../../auth/Auth';

const Signup = () => {
    const { signup } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [role, setRole] = useState('user'); // Default role
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Reset error before signup attempt

        try {
            await signup(email, password, name, role);
            // Optionally redirect to another page after signup
        } catch (err) {
            setError(err.message); // Set error message for display
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Role:</label>
                <select value={role} onChange={(e) => setRole(e.target.value)} required>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </select>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error */}
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default Signup;
