import { Link } from "react-router-dom";
import React from "react";
import "./Header.css";

export default function () {
  return (
    <header>
      <div className="header">
        <a href="#default" className="logo">
          CompanyLogo
        </a>
        <div className="header-right">
          <Link className="active" to="/">
            Home
          </Link>
          <Link to="/dealing">Dealing</Link>
          <Link to="/survey">Survey</Link>
        </div>
      </div>
    </header>
  );
}
