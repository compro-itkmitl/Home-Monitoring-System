import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import {Col, Container, Row} from 'reactstrap';

class NewDevice extends Component {
  render() {
    return (
      <BrowserRouter>
        <Container className="newDevice">
          <Row>
            <Col sm={12}>
              <h2 className="Head">Add new device</h2>
            </Col>
          </Row>
          <section className="deviceCard">
            <Row>
              <Col lg={12}>
                <form>
                  <div className="form-group">
                    <Row>
                      <Col lg={4} sm={12}>
                        <label for="newName">Device name</label>
                      </Col>
                      <Col lg={8} sm={12}>
                        <input id="newName" type="text" />
                      </Col>
                    </Row>
                  </div>
                  <div className="form-group">
                    <Row>
                      <Col lg={4} sm={12}>
                        <label for="newLocation">Device location</label>
                      </Col>
                      <Col lg={8} sm={12}>
                        <input id="newLocation" type="text" />
                      </Col>
                    </Row>
                  </div>
                  <div className="form-group">
                    <Row>
                      <Col lg={4} sm={12}>
                        <label for="newKey">Device key</label>
                      </Col>
                      <Col lg={8} sm={12}>
                        <input id="newKey" type="text" />
                      </Col>
                    </Row>
                  </div>
                  <div className="form-group">
                    <Row>
                      <Col lg={4} sm={12}>
                        <label for="newOwner">Device owner</label>
                      </Col>
                      <Col lg={8} sm={12}>
                        <input id="newOwner" type="text" />
                      </Col>
                    </Row>
                  </div>
                  <input type="submit" value="ADD" />
                </form>
              </Col>
            </Row>
          </section>
        </Container>
      </BrowserRouter>
    );
  }
}

export default NewDevice;
