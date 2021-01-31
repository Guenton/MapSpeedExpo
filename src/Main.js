/*

---> TL;DR Screen Router <---

*/

// Import React Dependencies
import React, { useState } from 'react';
import LoginScreen from './screens/LoginScreen';

// Import Components
import StartScreen from './screens/StartScreen';

const Main = () => {
  // Initialize Screen State to start route
  const [screen, setScreen] = useState('start');

  // Router function
  const router = (route) => setScreen(route);

  return (
    <>
      {screen === 'start' && <StartScreen setRoute={router} />}
      {screen === 'login' && <LoginScreen setRoute={router} />}
    </>
  );
};

export default Main;
