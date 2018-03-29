import React, { Component } from 'react';
import './components/css/App.css';
import Dashboard from './Dashboard';
import AboutUs from './components/AboutUs/AboutUs';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/about-us" component={AboutUs} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }

}

export default App;
