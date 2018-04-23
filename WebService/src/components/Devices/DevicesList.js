import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import Logo from '../img/rp3.png';

class DeviceList extends Component {
  render() {
    return (
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
              <Link to="/view" className="btn btnDeviceGo">
                View Monitor
              </Link>
            </Col>
          </Row>
        </section>
        <Link to="/new" className="btn btnDeviceAdd">
          +
        </Link>
      </Container>
    );
  }
}

export default withRouter(DeviceList);
