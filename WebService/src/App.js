import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import './components/css/App.css';

import Dashboard from './Dashboard';
import AboutUs from './components/AboutUs/AboutUs';
import DevicesList from './components/Devices/DevicesList';
import NewDevice from './components/Devices/NewDevice';
import Header from './components/Header';
import Home from './components/Home';

const enhance = compose(withRouter, connect((state) => state, {}));

const App = (props) => (
  <div>
    <Header title="Home Monitoring" />
    <Switch>
      <Route path="/" exact>
        {props.login ? <Redirect to="/devices" /> : <Home />}
      </Route>
      <Route path="/new" exact component={NewDevice} />
      <Route path="/view" exact>
        {props.login ? <Dashboard /> : <Redirect to="/" />}
      </Route>
      <Route path="/devices" exact>
        {props.login ? <DevicesList /> : <Redirect to="/" />}
      </Route>
      <Route path="/about-us" component={AboutUs} />
    </Switch>
  </div>
);

export default enhance(App);
