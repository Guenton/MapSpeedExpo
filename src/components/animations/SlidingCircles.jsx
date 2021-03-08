/*



*/

// Import React native Dependencies
import React from 'react';

// Import Components
import SlideInTopCircle from './SlideInTopCircle';
import SlideInBottomCircle from './SlideInBottomCircle';

const SlidingCircles = (props) => (
  <>
    {/* Top Circle Animation */}
    <SlideInTopCircle start={props.topStart} end={props.topEnd} />

    {/* Bottom Circle Animation */}
    <SlideInBottomCircle start={props.bottomStart} end={props.bottomEnd} />
  </>
);

export default SlidingCircles;
