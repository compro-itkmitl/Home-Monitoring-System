import React from 'react';
import Logo from './img/logo.png';
import { Link } from 'react-router-dom';
import { auth, provider } from './fire';
import { connect } from 'react-redux';
import { setLogin } from '../redux';
import { lifecycle, compose } from 'recompose';

const state = {
  login: false,
  user: null
};

const enhance = compose(
  connect((state) => state, { setLogin }),
  lifecycle({
    componentDidMount() {
      auth.onAuthStateChanged((user) => {
        if (user) {
          setLogin(user);
        }
      });
    }
  })
);

const logout = () => {
  auth.signOut().then(() => {
    state.login = false;
    state.user = null;
  });
};

const login = () => {
  auth.signInWithPopup(provider).then((result) => {
    setLogin(result.user);
  });
};

const Header = (props) => (
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
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about-us" className="nav-link">
            About Us
          </Link>
        </li>
      </ul>
      <button className="btnSignIn" onClick={props.login ? logout : login}>
        {props.login ? 'Log out' : 'Log in'}
      </button>
    </div>
  </nav>
);

export default enhance(Header);
