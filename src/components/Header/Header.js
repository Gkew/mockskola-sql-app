import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <Link to="/">Home</Link>
        <Link to="/adduser">Add Users</Link>
        <Link to="/getusers">Users</Link>
        <Link to="/findroles">Find Roles</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/enroll">Enroll</Link>
    </div>
  );
}

export default Header;
