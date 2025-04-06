import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../Firebase/firebase";
import "../ResetPasswordCSS/ResetPassword.css"; // <-- Make sure to import the CSS file

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("✅ Password reset email sent!");
    } catch (err) {
      setMessage("❌ " + err.message);
    }
  };

  return (
    <div className="reset-wrapper">
      <div className="reset-card">
        <h2 className="reset-title">🔐 Reset Password</h2>
        <form onSubmit={handleReset} className="reset-form">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="reset-input"
          />
          <button type="submit" className="reset-button">
            Send Reset Link
          </button>
          {message && <p className="reset-message">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
