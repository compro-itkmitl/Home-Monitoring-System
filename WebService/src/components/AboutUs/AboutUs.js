import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import OurProject from './OurProject';
import OurTeam from './OurTeam';

class AboutUs extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <OurProject />
          <OurTeam />
        </div>
      </BrowserRouter>
    );
  }
}

export default AboutUs;
