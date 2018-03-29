import React, { Component } from 'react';
import Wiput from '../img/wiput.jpg';
import Sakorn from '../img/beer.jpg';
import Teerapat from '../img/saint.jpg';

class AboutUs extends Component {
  render() {
    return (
      <div className="hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 heading text-center">
              <h2> คณะผู้จัดทำ </h2>
            </div>
          </div>
          <div className="row members">
            <div className="col-lg-4 col-sm-12">
              <img src={Wiput} alt="นายวิพุธ ภู่ทอง" />
              <p>
                <strong>นายวิพุธ ภู่ทอง</strong> <br /> 60070090{' '}
              </p>
            </div>
            <div className="col-lg-4 col-sm-12">
              <img src={Sakorn} alt="นายสาคร เสาแก้ว" />
              <p>
                <strong>นายสาคร เสาแก้ว</strong> <br /> 60070102{' '}
              </p>
            </div>
            <div className="col-lg-4 col-sm-12">
              <img src={Teerapat} alt="นายธีรภัทร ไกรศรีศิริกุล" />
              <p>
                <strong>นายธีรภัทร ไกรศรีศิริกุล</strong> <br /> 60070183{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
