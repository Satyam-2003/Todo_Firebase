import React from "react";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase";

const Navbar = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAuthAction = async () => {
    if (user) {
      // Logout if already logged in
      try {
        await signOut(auth);
        navigate("/login");
      } catch (err) {
        console.error("Error logging out:", err);
      }
    } else {
      // Redirect to login page if not logged in
      navigate("/login");
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1 className="heading">To-Do List</h1>
        <button onClick={handleAuthAction} className="auth-button">
          {user ? <FiLogOut className="icon" /> : <FiLogIn className="icon" />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
