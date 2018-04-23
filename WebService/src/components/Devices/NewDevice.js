import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Col, Container, Row, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const NewDevice = () => (
  <BrowserRouter>
    <Container className="newDevice">
      <Row>
        <Col sm={12}>
          <h2 className="Head">Add New Device</h2>
        </Col>
      </Row>
      <section className="deviceCard">
        <Row>
          <Col lg={12}>
            <Form>
              <FormGroup>
                <Row>
                  <Col lg={4} sm={12}>
                    <Label for="newName">Device Name</Label>
                  </Col>
                  <Col lg={8} sm={12}>
                    <Input id="newName" type="text" />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col lg={4} sm={12}>
                    <Label for="newLocation">Device Location</Label>
                  </Col>
                  <Col lg={8} sm={12}>
                    <Input id="newLocation" type="text" />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col lg={4} sm={12}>
                    <Label for="newKey">Device Type</Label>
                  </Col>
                  <Col lg={8} sm={12}>
                    <Input id="newKey" type="text" />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col lg={4} sm={12}>
                    <Button>Add</Button>
                  </Col>
                </Row>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </section>
    </Container>
  </BrowserRouter>
);

export default NewDevice;
