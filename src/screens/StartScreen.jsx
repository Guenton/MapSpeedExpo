import React, { useState } from 'react';
import { BackHandler } from 'react-native';
import { useBackHandler } from '@react-native-community/hooks';
import { scale } from 'react-native-size-matters';

import AppBackground from '../components/containers/AppBackground';
import SlidingCircles from '../components/animations/SlidingCircles';
import StartScreenFooterView from '../components/views/StartScreenFooterView';
import StartScreenHeaderView from '../components/views/StartScreenHeaderView';

import asyncDelay from '../utils/asyncDelay';

const StartScreen = ({ setRoute }) => {
  const [topStart, setTopStart] = useState(scale(-500));
  const [topEnd, setTopEnd] = useState(scale(250));
  const [bottomStart, setBottomStart] = useState(scale(500));
  const [bottomEnd, setBottomEnd] = useState(scale(0));

  useBackHandler(() => {
    BackHandler.exitApp();
    return true;
  });

  const animateToLoginScreen = async () => {
    setTopStart(scale(250));
    setTopEnd(scale(-500));
    setBottomStart(scale(0));
    setBottomEnd(scale(500));

    await asyncDelay();
    setRoute('login');
  };

  return (
    <AppBackground skyline>
      <SlidingCircles
        topStart={topStart}
        topEnd={topEnd}
        bottomStart={bottomStart}
        bottomEnd={bottomEnd}
      />

      <StartScreenHeaderView onStartPress={animateToLoginScreen} />
      <StartScreenFooterView />
    </AppBackground>
  );
};

export default StartScreen;
