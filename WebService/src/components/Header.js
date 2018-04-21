import React from 'react';
import Logo from './img/logo.png';
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="/">
        <img className="main-logo" src={Logo} alt="logo" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to='/' className="nav-link">Dashboard <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link to='/about-us' className="nav-link">About Us</Link>
          </li>
        </ul>
        <Link to='/login'>
          <button
            className="btnSignIn">
            Log in
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
