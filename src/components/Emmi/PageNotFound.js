import React from "react";
import './PageNotFound.css'
import { Link } from 'react-router-dom'
import ET from '../img/pngegg.png'
export default function PageNotFound() {
  return (
    <div className="not-found">
      <h1>404 Page Not Found?</h1>
      <div>
      <img src={ET} alt="ET"/>
      <h3>You phone <Link to="/">Home?</Link></h3>
      </div>
    </div>
  );
}
