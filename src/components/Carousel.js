import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: require("../media/slide-1.jpeg"),
    altText: 'Slide 1',
    caption: 'Come together with others interested in advancing equitable access to healthy food for all.',
    header: 'Learn, Connect, Act'
  },
  {
    src: require("../media/slide-2.jpeg"),
    altText: 'Slide 2',
    caption: 'November 14, 2018',
    header: 'Quarter 4 MFAN Meeting'
  },
  {
    src: require("../media/slide-3.jpeg"),
    altText: 'Slide 3',
    caption: 'On Race in the Food System',
    header: 'Critical Conversations'
  }
];

const Carousel = () => (
    <UncontrolledCarousel autoPlay interval={3000} items={items} />
);

export default Carousel;
