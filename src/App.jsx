import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";

import Login from "./routes/Login";
import Signup from "./routes/Signup";
import ResetPassword from "./components/ResetPassword";

import Navbar from "./components/Navbar";
import TaskList from "./components/Tasklist";
import AddTask from "./components/AddTask";

const TodoApp = () => (
  <>
    <Navbar />
    <AddTask />
    <TaskList />
  </>
);

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/reset" element={<ResetPassword />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <TodoApp />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
