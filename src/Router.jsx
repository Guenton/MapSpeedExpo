import React, { useEffect } from 'react';
import { SafeAreaView, Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { setKeyboardOpen } from './store/actions/core';

// import LoginBiometricScreen from './screens/LoginBiometricScreen';
// import LoginPasswordScreen from './screens/LoginPasswordScreen';
// import LoginResetScreen from './screens/LoginResetScreen';
// import LoginSignupScreen from './screens/LoginSignupScreen';

import StartScreen from './screens/StartScreen';

const Router = () => {
  const dispatch = useDispatch();

  const route = useSelector((state) => state.core.route);

  useEffect(() => {
    const kbShow = Keyboard.addListener('keyboardDidShow', () => dispatch(setKeyboardOpen(true)));
    const kbHide = Keyboard.addListener('keyboardDidHide', () => dispatch(setKeyboardOpen(false)));
    return () => {
      kbShow.remove();
      kbHide.remove();
    };
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* {route === 'login-biometric' && <LoginBiometricScreen />} */}
      {/* {route === 'login-password' && <LoginPasswordScreen />} */}
      {/* {route === 'login-signup' && <LoginSignupScreen />} */}
      {/* {route === 'login-reset' && <LoginResetScreen />} */}

      {route === 'start' && <StartScreen />}
    </SafeAreaView>
  );
};

export default Router;
