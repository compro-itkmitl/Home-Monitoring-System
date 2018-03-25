import React, { Component } from 'react';
import './components/css/App.css';
import TempGraph from './components/Graph/TempGraph';
import HumidGraph from './components/Graph/HumidGraph';


class App extends Component {

  render() {
    return (
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <TempGraph />
        </div>
        <div className="col-lg-6 col-sm-12">
          <HumidGraph />
        </div>
        
      </div>

      
    )
  }

}

export default App;
