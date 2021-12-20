import React, { useEffect } from 'react';
import { SafeAreaView, Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as NavigationBar from 'expo-navigation-bar';

import { setKeyboardOpen } from './store/actions/core';

// import LoginBiometricScreen from './screens/LoginBiometricScreen';
import LoginPasswordScreen from './screens/LoginPasswordScreen';
// import LoginResetScreen from './screens/LoginResetScreen';
// import LoginSignupScreen from './screens/LoginSignupScreen';

import StartScreen from './screens/StartScreen';
import LoginSelectScreen from './screens/LoginSelectScreen';

const Router = () => {
  const dispatch = useDispatch();

  const route = useSelector((state) => state.core.route);
  const isDark = useSelector((state) => state.core.isDark);
  const white = useSelector((state) => state.color.white);
  const black = useSelector((state) => state.color.black);

  useEffect(() => {
    const kbShow = Keyboard.addListener('keyboardDidShow', () => dispatch(setKeyboardOpen(true)));
    const kbHide = Keyboard.addListener('keyboardDidHide', () => dispatch(setKeyboardOpen(false)));
    return () => {
      kbShow.remove();
      kbHide.remove();
    };
  }, []);

  useEffect(() => {
    if (isDark) {
      NavigationBar.setBackgroundColorAsync(black);
      NavigationBar.setButtonStyleAsync('light');
    } else {
      NavigationBar.setBackgroundColorAsync(white);
      NavigationBar.setButtonStyleAsync('dark');
    }
  }, [isDark]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* {route === 'login-biometric' && <LoginBiometricScreen />} */}
      {route === 'login-password' && <LoginPasswordScreen />}
      {/* {route === 'login-signup' && <LoginSignupScreen />} */}
      {/* {route === 'login-reset' && <LoginResetScreen />} */}

      {route === 'start' && <StartScreen />}

      {route === 'login-select' && <LoginSelectScreen />}
    </SafeAreaView>
  );
};

export default Router;
