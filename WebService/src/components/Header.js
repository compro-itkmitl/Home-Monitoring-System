import React, { Component } from 'react';
import Logo from './img/logo.png';
import {Link} from "react-router-dom";
import firebase, { auth, provider } from './fire';

class Header extends Component {

  constructor() {
    super();
    this.state = {
      currentItem: '',
      username: '',
      items: [],
      user: null
    }
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  logout() {
    auth.signOut()
      .then(() => {
        this.setState({
          user: null
        });
      });
  }

  login() {
    auth.signInWithPopup(provider)
      .then((result) => {
        const user2 = result.user;
        this.setState({
          user2
        });
      });
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      }
    }) };

  render() {
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
          <button
            className="btnSignIn"
            onClick={this.state.user ? this.logout : this.login}
          >
            {this.state.user ? "Log out" : "Log in"}
          </button>
        </div>
      </nav>
    );
  }
}

export default Header;
