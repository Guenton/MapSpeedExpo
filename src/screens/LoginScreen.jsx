import React, { useState } from 'react';
import { useBackHandler } from '@react-native-community/hooks';
import { scale } from 'react-native-size-matters';

import AppBackground from '../components/containers/AppBackground';
import SlidingCircles from '../components/animations/SlidingCircles';
import LoginScreenHeaderView from '../components/views/LoginScreenHeaderView';

const LoginScreen = (props) => {
  const [topStart, setTopStart] = useState(scale(-500));
  const [topEnd, setTopEnd] = useState(scale(350));
  const [bottomStart, setBottomStart] = useState(scale(500));
  const [bottomEnd, setBottomEnd] = useState(scale(100));

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
      <SlidingCircles
        topStart={topStart}
        topEnd={topEnd}
        bottomStart={bottomStart}
        bottomEnd={bottomEnd}
      />

      <LoginScreenHeaderView />
    </AppBackground>
  );
};

export default LoginScreen;
