import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';
import { lifecycle, compose } from 'recompose';
import { setDevicesList } from '../../redux';
import { db } from '../fire';
import Logo from '../img/rp3.png';

let devicesList = [
  <section className="deviceCard" key="loading">
    Loading...
  </section>
];

const enhance = compose(
  withRouter,
  connect((state) => state, { setDevicesList }),
  lifecycle({
    async componentDidMount() {
      let devices = await db
        .collection('devices')
        .where('owner', '==', this.props.user.uid)
        .get();
      devicesList = [];
      devices.forEach((doc) => {
        let data = doc.data();
        devicesList.push({ ...data, id: doc.id });
      });
      devicesList = devicesList.map((device, index) => (
        <section className="deviceCard" key={device.id}>
          <Row>
            <Col className="deviceIcon" lg={3} sm={12}>
              <img src={Logo} alt="logo" />
            </Col>
            <Col lg={9} sm={12}>
              <p>
                <strong>NAME:</strong> Raspberry Pi 3
              </p>
              <p>
                <strong>LOCATION:</strong> {device.location}
              </p>
              <p>
                <strong>ACCESS KEY: </strong> {device.access_key}
              </p>
              <p>
                <strong>OWNER:</strong> {this.props.user.displayName}
              </p>
              <Link to="/view" className="btn btnDeviceGo">
                View Monitor
              </Link>
            </Col>
          </Row>
        </section>
      ));
      this.props.setDevicesList(devicesList);
    }
  })
);

const DeviceList = (props) => (
  <Container className="deviceList">
    <Row>
      <Col sm={12}>
        <h2 className="Head">My Devices</h2>
      </Col>
    </Row>
    {devicesList.length > 0 ? devicesList : <section className="deviceCard">Let's add your new device!</section>}
    {/* <Link to="/new" className="btn btnDeviceAdd">
      +
    </Link> */}
  </Container>
);

export default enhance(DeviceList);
