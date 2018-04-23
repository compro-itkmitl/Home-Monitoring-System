import React from 'react';
import Logo from './img/logo.png';
import { Link } from 'react-router-dom';
import { auth, provider } from './fire';
import { connect } from 'react-redux';
import { setLogin, setLogout } from '../redux';
import { lifecycle, compose } from 'recompose';

const enhance = compose(
  connect((state) => state, { setLogin, setLogout }),
  lifecycle({
    componentDidMount() {
      auth.onAuthStateChanged((user) => {
        if (user) {
          this.props.setLogin(user);
        }
      });
    }
  })
);

const Header = (props) => {
  const logout = () => {
    auth.signOut().then(() => {
      props.setLogout();
    });
  };

  const login = () => {
    auth.signInWithPopup(provider).then((result) => {
      props.setLogin(result.user);
    });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link className="navbar-brand" to="/">
        <img className="main-logo" src={Logo} alt="logo" />
      </Link>
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
          {props.login ? (
            <li className="nav-item">
              <Link to="/devices" className="nav-link">
                Device List
              </Link>
            </li>
          ) : (
            ''
          )}
          <li className="nav-item">
            <Link to="/about-us" className="nav-link">
              About Us
            </Link>
          </li>
        </ul>
        <button className="btnSignIn" onClick={props.login ? () => logout() : () => login()}>
          {props.login ? 'Log out' : 'Log in'}
        </button>
      </div>
    </nav>
  );
};

export default enhance(Header);
