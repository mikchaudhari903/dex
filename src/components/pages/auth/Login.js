import React, { useState, useEffect } from 'react';
import { useAuth } from '../../auth/Auth';
import { useNavigate, Link } from 'react-router-dom'; // Import Link here
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [cooldown, setCooldown] = useState(false);
    const [cooldownTime, setCooldownTime] = useState(0);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (cooldown) return;

        setLoading(true);
        try {
            await login(email, password);
            navigate('/admin/dashboard');
        } catch (error) {
            console.error("Failed to log in:", error);
            handleLoginError(error.code);
        } finally {
            setLoading(false);
        }
    };

    const handleLoginError = (errorCode) => {
        switch (errorCode) {
            case 'auth/user-not-found':
                toast.error("No user found with this email.");
                break;
            case 'auth/wrong-password':
                toast.error("Incorrect password. Please try again.");
                break;
            case 'auth/too-many-requests':
                toast.error("Too many requests. Please wait a few minutes and try again.");
                setCooldown(true);
                setCooldownTime(300);

                const countdown = setInterval(() => {
                    setCooldownTime((prev) => {
                        if (prev <= 1) {
                            clearInterval(countdown);
                            setCooldown(false);
                            return 0;
                        }
                        return prev - 1;
                    });
                }, 1000);
                break;
            default:
                toast.error("Login failed. Please check your credentials and try again.");
        }
    };

    return (
        <section className="vh-100" style={{ backgroundColor: '#9A616D' }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card" style={{ borderRadius: '1rem' }}>
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                                        alt="login form"
                                        className="img-fluid"
                                        style={{ borderRadius: '1rem 0 0 1rem' }}
                                    />
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-black">
                                        <form onSubmit={handleSubmit}>
                                            <div className="d-flex align-items-center mb-3 pb-1">
                                                <i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }}></i>
                                                <span className="h1 fw-bold mb-0">Logo</span>
                                            </div>
                                            <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h5>
                                            <div className="form-outline mb-4">
                                                <label htmlFor="email" className="form-label">Email address</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    className="form-control form-control-lg"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    required
                                                    disabled={cooldown}
                                                />
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label htmlFor="password" className="form-label">Password</label>
                                                <input
                                                    type="password"
                                                    id="password"
                                                    className="form-control form-control-lg"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    required
                                                    disabled={cooldown}
                                                />
                                            </div>
                                            <button className="btn btn-dark btn-lg btn-block" type="submit" disabled={loading || cooldown}>
                                                {loading ? "Loading..." : "Login"}
                                            </button>
                                            {cooldown && <p className="text-warning mt-3">Please wait {cooldownTime} seconds before trying again.</p>}
                                            <p className="mb-5 pb-lg-2 mt-3" style={{ color: '#393f81' }}>
                                                Don't have an account? <Link to="/register" style={{ color: '#393f81' }}>Register here</Link>
                                            </p>
                                            <a href="#!" className="small text-muted">Terms of use.</a>
                                            <a href="#!" className="small text-muted">Privacy policy</a>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer /> {/* Add the ToastContainer to your component */}
        </section>
    );
};

export default Login;
