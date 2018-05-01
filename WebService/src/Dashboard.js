import React from 'react';
import { BrowserRouter, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';
import { compose } from 'recompose';

import './components/css/App.css';
import TempGraph from './components/Graph/TempGraph';
import HumidGraph from './components/Graph/HumidGraph';

const enhance = compose(withRouter, connect((state) => state, {}));

const Dashboard = () => (
  <BrowserRouter>
    <div>
      <Container className="deviceInfo">
        <Col lg={12}>
          <h2 className="Head"> Device Information </h2>
          <h6 className="subHead"> REAL-TIME </h6>
        </Col>
      </Container>

      <Container className="dashboard" fluid>
        <Row>
          <Col lg={6} sm={12}>
            <section className="temp">
              <h3>อุณหภูมิ</h3>
              <TempGraph />
            </section>
          </Col>
          <Col lg={6} sm={12}>
            <section className="humid">
              <h3>ความชื้นสัมพัทธ์</h3>
              <HumidGraph />
            </section>
          </Col>
        </Row>
      </Container>
    </div>
  </BrowserRouter>
);
export default enhance(Dashboard);
