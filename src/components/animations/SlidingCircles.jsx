import React from 'react';

import SlideInTopCircle from './SlideInTopCircle';
import SlideInBottomCircle from './SlideInBottomCircle';

const SlidingCircles = ({ topStart, topEnd, bottomStart, bottomEnd }) => (
  <>
    <SlideInTopCircle start={topStart} end={topEnd} />
    <SlideInBottomCircle start={bottomStart} end={bottomEnd} />
  </>
);

export default SlidingCircles;
