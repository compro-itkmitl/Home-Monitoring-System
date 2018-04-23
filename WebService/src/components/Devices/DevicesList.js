import React, { Component } from 'react';
import { BrowserRouter, Link, withRouter } from 'react-router-dom';
import { Col, Container, Row, Button } from 'reactstrap';
import Logo from '../img/rp3.png';

class DeviceList extends Component {
  render() {
    return (
      <BrowserRouter>
        <Container className="deviceList">
          <Row>
            <Col sm={12}>
              <h2 className="Head">My Devices</h2>
            </Col>
          </Row>
          <section className="deviceCard">
            <Row>
              <Col className="deviceIcon" lg={3} sm={12}>
                <img src={Logo} alt="logo" />
              </Col>
              <Col lg={9} sm={12}>
                <p>
                  <strong>NAME:</strong> RASPBERRY PI 3
                </p>
                <p>
                  <strong>LOCATION:</strong> HOME
                </p>
                <p>
                  <strong>ACCESS KEY: </strong>[...]
                </p>
                <p>
                  <strong>OWNER:</strong> WIPUT
                </p>
                <button className="btnDeviceGo">View Monitor ></button>
              </Col>
            </Row>
          </section>
          <Link to="/new">
            <Button className="btnDeviceAdd">+</Button>
          </Link>
        </Container>
      </BrowserRouter>
    );
  }
}

export default withRouter(DeviceList);
