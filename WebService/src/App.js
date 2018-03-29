import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './components/css/App.css';
import Dashboard from './Dashboard';
import AboutUs from './components/AboutUs/AboutUs';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header title="Home Monitoring" />
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/about-us" component={AboutUs} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
