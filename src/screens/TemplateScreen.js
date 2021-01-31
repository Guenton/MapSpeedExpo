/*

---> TL;DR Entry Screen right after Splash Screen <---

*/

// Import React Dependencies
import React, { useState } from 'react';
import { BackHandler } from 'react-native';
import { useBackHandler } from '@react-native-community/hooks';

// Import Components
import AppBackground from '../components/containers/AppBackground';
import SlidingCircles from '../components/animations/SlidingCircles';

// Import Utilities
import asyncDelay from '../utils/asyncDelay';

const TemplateScreen = (props) => {
  // Init Circle Animations
  const [topStart, setTopStart] = useState(-500);
  const [topEnd, setTopEnd] = useState(250);
  const [bottomStart, setBottomStart] = useState(500);
  const [bottomEnd, setBottomEnd] = useState(0);

  // Backhandler hook to exit app
  useBackHandler(() => {
    BackHandler.exitApp();
    return true;
  });

  // Return Component
  return (
    <AppBackground skyline>
      {/* Circle Slide In Animations */}
      <SlidingCircles
        topStart={topStart}
        topEnd={topEnd}
        bottomStart={bottomStart}
        bottomEnd={bottomEnd}
      />
    </AppBackground>
  );
};

export default TemplateScreen;
