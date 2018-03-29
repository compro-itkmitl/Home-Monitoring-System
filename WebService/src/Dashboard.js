import React, { Component } from 'react';
import './components/css/App.css';
import TempGraph from './components/Graph/TempGraph';
import HumidGraph from './components/Graph/HumidGraph';
import { BrowserRouter } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="row dashboard">
          <div className="col-lg-6 col-sm-12 temp">
            <h3>อุณหภูมิ</h3>
            <TempGraph />
          </div>
          <div className="col-lg-6 col-sm-12 humid">
            <h3>ความชื้นสัมพัทธ์</h3>
            <HumidGraph />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Dashboard;
