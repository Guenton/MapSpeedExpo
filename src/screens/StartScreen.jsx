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
import StartScreenFooterView from '../components/views/StartScreenFooterView';
import StartScreenHeaderView from '../components/views/StartScreenHeaderView';

// Import Utilities
import asyncDelay from '../utils/asyncDelay';

const StartScreen = (props) => {
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

  // Start Press Handler
  const onStartPress = async () => {
    setTopStart(250);
    setTopEnd(-500);
    setBottomStart(0);
    setBottomEnd(500);
    await asyncDelay();
    props.setRoute('login');
  };

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

      {/* Header Section */}
      <StartScreenHeaderView onStartPress={onStartPress} />

      {/* Footer Section */}
      <StartScreenFooterView />
    </AppBackground>
  );
};

export default StartScreen;
