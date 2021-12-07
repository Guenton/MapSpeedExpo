import React, { useState } from 'react';
import { useBackHandler } from '@react-native-community/hooks';
import { scale } from 'react-native-size-matters';

import AppBackground from '../components/containers/AppBackground';
import SlidingCircles from '../components/animations/SlidingCircles';
import LoginScreenHeaderView from '../components/views/LoginScreenHeaderView';

const LoginScreen = (props) => {
  const [topCirclePosition, setTopCirclePosition] = useState(scale(250));
  const [bottomCirclePosition, setBottomCirclePosition] = useState(scale(500));

  useBackHandler(() => {
    props.setRoute('start');
    return true;
  });

  const onPressStart = () => {
    setStart(0);
    setEnd(scale(500));
  };

  return (
    <AppBackground>
      <SlidingCircles topCirclePosition={topCirclePosition} bottomCirclePosition={bottomCirclePosition} />

      <LoginScreenHeaderView />
    </AppBackground>
  );
};

export default LoginScreen;
