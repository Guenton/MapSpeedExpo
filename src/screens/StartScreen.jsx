import React, { useState } from 'react';
import { BackHandler } from 'react-native';
import { useBackHandler } from '@react-native-community/hooks';
import { scale } from 'react-native-size-matters';

import AppBackground from '../components/containers/AppBackground';
import SlidingCircles from '../components/animations/SlidingCircles';
import StartScreenHeaderView from '../components/views/StartScreenHeaderView';
// import StartScreenFooterView from '../components/views/StartScreenFooterView';

import asyncDelay from '../utils/asyncDelay';

const StartScreen = ({ setRoute }) => {
  const [topCirclePosition, setTopCirclePosition] = useState(scale(-500));
  const [bottomCirclePosition, setBottomCirclePosition] = useState(scale(400));

  useBackHandler(() => {
    BackHandler.exitApp();
    return true;
  });

  const animateToLoginScreen = async () => {
    setTopCirclePosition(scale(-1000));
    setBottomCirclePosition(scale(1000));

    await asyncDelay();
    // setRoute('login');

    setTopCirclePosition(scale(-500));
    setBottomCirclePosition(scale(400));
  };

  return (
    <AppBackground skyline>
      <SlidingCircles
        topCirclePosition={topCirclePosition}
        bottomCirclePosition={bottomCirclePosition}
      />

      <StartScreenHeaderView onPressStart={() => animateToLoginScreen()} />
      {/* <StartScreenFooterView /> */}
    </AppBackground>
  );
};

export default StartScreen;
