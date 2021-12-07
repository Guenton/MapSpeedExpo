import React from 'react';

import SlideInTopCircle from './SlideInTopCircle';
import SlideInBottomCircle from './SlideInBottomCircle';

const SlidingCircles = ({ topCirclePosition, bottomCirclePosition }) => (
  <>
    <SlideInTopCircle position={topCirclePosition} />
    <SlideInBottomCircle position={bottomCirclePosition} />
  </>
);

export default SlidingCircles;
