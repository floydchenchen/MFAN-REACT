import React from 'react';
import Carousel from '../components/Carousel';
import CardsWrapper from '../containers/CardsWrapper';

const Main = () => (
  <div id="main" style={{marginTop:"-20px"}}>
    <Carousel />
    <CardsWrapper />
  </div>
);

export default Main;