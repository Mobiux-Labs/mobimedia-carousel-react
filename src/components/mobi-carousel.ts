import React from 'react';
import {createComponent} from '@lit/react';
import MobiCarousel from '@mobimedia/carousel';

export const Carousel = createComponent({
  tagName: 'mobi-carousel',
  elementClass: MobiCarousel,
  react: React,
  events: {},
});
