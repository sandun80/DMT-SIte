import { useState } from "react";
import { useNavigate } from "react-router-dom";
import dmtLogo from "../assets/DMT_logo.png";
import emblem from "../assets/Emblem.png"
import "../styles/Login.css";

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        navigate("/dashboard");
    };

    return (
        <div className="dmt-login-page">
            <div className="dmt-login-card">
                {/* LEFT SIDE */}
                <div className="dmt-login-info">
                    <div className="dmt-login-logo">
                        <img src={dmtLogo} alt="Department of Motor Traffic" />
                    </div>

                    <span className="dmt-login-label">
                        DEPARTMENT OF MOTOR TRAFFIC
                    </span>

                    <h1>Welcome Back</h1>

                    <p>
                        Sign in to access the Department of Motor Traffic web
                        portal services.
                    </p>
                </div>

                {/* RIGHT SIDE */}
                <div className="dmt-login-form-container">
                    <div className="dmt-login-form-header">
                        <span>LOGIN PORTAL</span>

                        <h2>Sign In</h2>

                        <p>Enter your credentials to continue.</p>
                    </div>

                    <form className="dmt-login-form" onSubmit={handleSubmit}>
                        {/* EMAIL */}
                        <div className="dmt-login-input-group">
                            <label htmlFor="email">Email Address</label>

                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your email address"
                                required
                            />
                        </div>

                        {/* PASSWORD */}
                        <div className="dmt-login-input-group">
                            <div className="dmt-login-password-label">
                                <label htmlFor="password">Password</label>

                                <button
                                    type="button"
                                    className="dmt-login-forgot"
                                >
                                    Forgot Password?
                                </button>
                            </div>

                            <div className="dmt-login-password-wrapper">
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    required
                                />

                                <button
                                    type="button"
                                    className="dmt-login-show-password"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                        </div>

                        {/* REMEMBER */}
                        <div className="dmt-login-options">
                            <label className="dmt-login-remember">
                                <input type="checkbox" />

                                <span>Remember me</span>
                            </label>
                        </div>

                        {/* LOGIN */}
                        <button type="submit" className="dmt-login-button">
                            Sign In
                            <span>→</span>
                        </button>
                    </form>

                    <div className="dmt-login-footer">
                        <span>Department of Motor Traffic</span>

                        <span>© 2026</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
