import React, { useEffect } from 'react';
import { SafeAreaView, Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as NavigationBar from 'expo-navigation-bar';

import { setKeyboardOpen } from './store/actions/core';
import { setFirebaseLanguage } from './firebase/auth';

// import LoginBiometricScreen from './screens/LoginBiometricScreen';
import LoginPasswordScreen from './screens/LoginPasswordScreen';
// import LoginResetScreen from './screens/LoginResetScreen';
// import LoginSignupScreen from './screens/LoginSignupScreen';

import StartScreen from './screens/StartScreen';
import LoginSelectScreen from './screens/LoginSelectScreen';

import { white, black } from './config/colors';
import MainScreen from './screens/MainScreen';
import isAndroid from './services/core/isAndroid';

const Router = () => {
  const dispatch = useDispatch();

  const route = useSelector((state) => state.core.route);
  const isDark = useSelector((state) => state.core.isDark);
  const currentLang = useSelector((state) => state.lang.currentLang);

  useEffect(() => {
    const kbShow = Keyboard.addListener('keyboardDidShow', () => dispatch(setKeyboardOpen(true)));
    const kbHide = Keyboard.addListener('keyboardDidHide', () => dispatch(setKeyboardOpen(false)));
    return () => {
      kbShow.remove();
      kbHide.remove();
    };
  }, []);

  useEffect(() => {
    if (isDark && isAndroid) {
      NavigationBar.setBackgroundColorAsync(black);
      NavigationBar.setButtonStyleAsync('light');
    } else if (isAndroid) {
      NavigationBar.setBackgroundColorAsync(white);
      NavigationBar.setButtonStyleAsync('dark');
    }
  }, [isDark]);

  useEffect(() => {
    setFirebaseLanguage(currentLang);
  }, [currentLang]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {route === 'start' && <StartScreen />}

      {route === 'login-select' && <LoginSelectScreen />}
      {/* {route === 'login-biometric' && <LoginBiometricScreen />} */}
      {route === 'login-password' && <LoginPasswordScreen />}
      {/* {route === 'login-signup' && <LoginSignupScreen />} */}
      {/* {route === 'login-reset' && <LoginResetScreen />} */}

      {route === 'main' && <MainScreen />}
    </SafeAreaView>
  );
};

export default Router;
