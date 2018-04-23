import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Col, Container, Row, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const NewDevice = () => (
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
            <Form>
              <FormGroup>
                <Row>
                  <Col lg={4} sm={12}>
                    <Label for="newName">Device name</Label>
                  </Col>
                  <Col lg={8} sm={12}>
                    <Input id="newName" type="text" />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col lg={4} sm={12}>
                    <Label for="newLocation">Device location</Label>
                  </Col>
                  <Col lg={8} sm={12}>
                    <Input id="newLocation" type="text" />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col lg={4} sm={12}>
                    <Label for="newKey">Device key</Label>
                  </Col>
                  <Col lg={8} sm={12}>
                    <Input id="newKey" type="text" />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col lg={4} sm={12}>
                    <Label for="newOwner">Device owner</Label>
                  </Col>
                  <Col lg={8} sm={12}>
                    <Input id="newOwner" type="text" />
                  </Col>
                </Row>
              </FormGroup>
              <Button>Add</Button>
            </Form>
          </Col>
        </Row>
      </section>
    </Container>
  </BrowserRouter>
);

export default NewDevice;
