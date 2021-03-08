/*

---> TL;DR Template for Screens with circle animations <---

*/

// Import React Dependencies
import React, { useState } from 'react';
import { useBackHandler } from '@react-native-community/hooks';

// Import Components
import AppBackground from '../components/containers/AppBackground';
import SlidingCircles from '../components/animations/SlidingCircles';
import LoginScreenHeaderView from '../components/views/LoginScreenHeaderView';

const LoginScreen = (props) => {
  // Init Circle Animations
  const [topStart, setTopStart] = useState(-500);
  const [topEnd, setTopEnd] = useState(450);
  const [bottomStart, setBottomStart] = useState(500);
  const [bottomEnd, setBottomEnd] = useState(200);

  // Backhandler hook to exit app
  useBackHandler(() => {
    props.setRoute('start');
    return true;
  });

  // Start Press Handler
  const onPressStart = () => {
    setStart(0);
    setEnd(500);
  };

  // Return Component
  return (
    <AppBackground>
      {/* Circle Slide In Animations */}
      <SlidingCircles
        topStart={topStart}
        topEnd={topEnd}
        bottomStart={bottomStart}
        bottomEnd={bottomEnd}
      />

      {/* Header Section */}
      <LoginScreenHeaderView />
    </AppBackground>
  );
};

export default LoginScreen;
