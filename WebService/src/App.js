import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './components/css/App.css';
import Dashboard from './Dashboard';
import AboutUs from './components/AboutUs/AboutUs';
import LogIn from './components/LogIn/LogIn';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header title="Home Monitoring" />
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/login" exact component={LogIn} />
            <Route path="/about-us" component={AboutUs} />
          </Switch>
      </div>
    );
  }
}

export default App;
