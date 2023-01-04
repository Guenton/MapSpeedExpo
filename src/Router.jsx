import React, { useEffect } from 'react';
import { SafeAreaView, Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as NavigationBar from 'expo-navigation-bar';

import { setAlert, setKeyboardOpen } from './store/actions/core';
import { setFirebaseLanguage } from './firebase/auth';
import { setLanguageAsync } from './config/lang';
import { white, black } from './config/colors';
import isAndroid from './services/core/isAndroid';

import StartScreen from './screens/StartScreen';

import LoginSelectScreen from './screens/LoginSelectScreen';
// import LoginBiometricScreen from './screens/LoginBiometricScreen';
import LoginPasswordScreen from './screens/LoginPasswordScreen';
// import LoginResetScreen from './screens/LoginResetScreen';
// import LoginSignupScreen from './screens/LoginSignupScreen';

import MainScreen from './screens/MainScreen';

import VehicleDetailScreen from './screens/VehicleDetailScreen';
import AddVinScreen from './screens/AddVinScreen';

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
    setLanguageAsync(currentLang).catch((err) => dispatch(setAlert(err)));
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
      {/* {route === 'main' && <AddVinScreen />} */}

      {route === 'vehicle-add-vin' && <AddVinScreen />}
      {route === 'vehicle-detail' && <VehicleDetailScreen />}
    </SafeAreaView>
  );
};

export default Router;
