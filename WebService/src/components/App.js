import React, { Component } from 'react';
import { Header } from './Header';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';
import fire from '../fire';
import { RealtimeGraph } from './RealtimeGraph';
import { Motion } from './Motion';

export default class App extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        <Header title="Home Monitoring" />
          <main>
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <RealtimeGraph />
              </div>
              <div className="col-lg-6 col-sm-12">
                <Motion />
              </div>
            </div>
          </main>
        </div>
    );
  }
  
}

