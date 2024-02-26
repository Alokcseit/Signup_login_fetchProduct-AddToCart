import React from "react";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div className="container">
      <h1>Welcome to Our App</h1>
      <div className="buttons">
        <Link to="/signup" className="button">
          Sign Up
        </Link>
        <Link to="/login" className="button">
          Log In
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
