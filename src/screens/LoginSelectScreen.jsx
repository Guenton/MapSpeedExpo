import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useBackHandler } from '@react-native-community/hooks';
import { scale } from 'react-native-size-matters';

import AppBackground from '../components/containers/AppBackground';
import SlidingCircles from '../components/animations/SlidingCircles';

import { setRoute } from '../store/actions/core';

const LoginSelectScreen = () => {
  const dispatch = useDispatch();

  const [topCirclePosition, setTopCirclePosition] = useState(scale(-500));
  const [bottomCirclePosition, setBottomCirclePosition] = useState(scale(500));

  useBackHandler(() => {
    dispatch(setRoute('start'));
    return true;
  });

  return (
    <AppBackground skyline>
      <SlidingCircles
        topCirclePosition={topCirclePosition}
        bottomCirclePosition={bottomCirclePosition}
      />
    </AppBackground>
  );
};

export default LoginSelectScreen;
