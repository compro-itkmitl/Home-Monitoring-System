import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';
import { RealtimeGraph } from './RealtimeGraph';
import { Motion } from './Motion';

export default class App extends Component {
  render() {
    return (
      <div className="container dashboard">
        <main>
          <div className="row">
            <section>
              <div className="col-lg-6 col-sm-12">
                <RealtimeGraph />
              </div>
            </section>
            <section>
              <div className="col-lg-6 col-sm-12">
                <Motion />
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
}
