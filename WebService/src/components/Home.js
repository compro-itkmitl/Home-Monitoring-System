import React from 'react';

import { Container } from 'reactstrap';
import Banner from './img/banner.png';

const Home = () => (
  <Container>
    <center>
      <img src={Banner} className="img-fluid" alt="banner" />
    </center>
  </Container>
);

export default Home;
