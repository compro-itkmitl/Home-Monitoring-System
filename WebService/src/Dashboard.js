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
        <Row>
          <Col lg={12}>
            <h2 className="Head"> Device information </h2>
            <h6 className="subHead"> REAL-TIME </h6>
          </Col>
        </Row>
      </Container>

      <Row className="dashboard">
        <div className="col-lg-6 col-sm-12">
          <section className="temp">
            <h3>อุณหภูมิ</h3>
            <TempGraph />
          </section>
        </div>
        <div className="col-lg-6 col-sm-12">
          <section className="humid">
            <h3>ความชื้นสัมพัทธ์</h3>
            <HumidGraph />
          </section>
        </div>
      </Row>
    </div>
  </BrowserRouter>
);
export default enhance(Dashboard);
