import { useState } from "react";
import "../assets/styles/login.css";

const GoogleIcon = () => (
  <svg className="google-icon" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 7.9 3l5.7-5.7C34.5 6.5 29.5 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.9z"/>
    <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 19.1 13 24 13c3.1 0 5.8 1.1 7.9 3l5.7-5.7C34.5 6.5 29.5 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
    <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.3 35.3 26.8 36 24 36c-5.3 0-9.7-3.3-11.3-8H6.4C9.7 35.6 16.3 44 24 44z"/>
    <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4.1 5.5l6.2 5.2C41.4 35 44 30 44 24c0-1.3-.1-2.7-.4-3.9z"/>
  </svg>
);

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // handle login logic
  };

  return (
    <div className="page">
      {/* Navbar */}
      {/* <nav className="navbar">
        <span className="logo">FocusList</span>
        <button className="nav-support">Support</button>
      </nav> */}

      {/* Main */}
      <main className="main">
        <div className="heading-block">
          <h1 className="heading-title">Welcome back.</h1>
          <p className="heading-sub">Enter the space of intentional productivity.</p>
        </div>

        <div className="card">
          {/* Email */}
          <div className="field">
            <label className="field-label">Email Address</label>
            <input
              className="input"
              type="email"
              placeholder="you@focus.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="field">
            <div className="field-header">
              <label className="field-label">Password</label>
              <button className="forgot-link">Forgot?</button>
            </div>
            <input
              className="input"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Login button */}
          <button className="btn-login" onClick={handleLogin}>
            Login <span className="btn-arrow">→</span>
          </button>

          {/* Divider */}
          <div className="divider">
            <div className="divider-line" />
            <span className="divider-text">or</span>
            <div className="divider-line" />
          </div>

          {/* Google */}
          <button className="btn-google">
            <GoogleIcon />
            Continue with Google
          </button>
        </div>

        {/* Sign up */}
        <p className="signup-row">
          New to FocusList?&nbsp;
          <button className="signup-link">Sign up</button>
        </p>
      </main>

      {/* Footer */}
      {/* <footer className="footer">
        <button className="footer-link">Privacy Policy</button>
        <button className="footer-link">Terms of Service</button>
        <button className="footer-link">Cookie Settings</button>
      </footer> */}
    </div>
  );
}