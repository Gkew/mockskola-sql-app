import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <Link to="/">Home</Link>
      <Link to="/adduser">Add Users</Link>
      <Link to="/getusers">Find Users</Link>
   
      <Link to="/courses">Courses</Link>
      <Link to="/findroles">Academics</Link>
      <Link to="/enroll">Apply to Spaceforce</Link>
      <Link to="/blog">Blogg</Link>
    </div>
  );
}

export default Header;
