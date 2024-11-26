import React from 'react';
import {createComponent} from '@lit/react';
import MobiCarousel from '@mobimedia/carousel';

const Carousel = createComponent({
  tagName: 'mobi-carousel',
  elementClass: MobiCarousel,
  react: React,
  events: {},
});
// import Carousel from '@mobimedia/carousel-react';

export default Carousel;
