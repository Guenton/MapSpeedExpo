import React from 'react';
import { ImageBackground, StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';

import { primaryOpacity } from '../../config/colors';

import skylineBG from '../../assets/images/SkylineBG.jpg';
import hdBMW from '../../assets/images/hdBMW.jpg';

const AppBackground = ({ children, skyline }) => {
  const isDark = useSelector((state) => state.core.isDark);

  return (
    <ImageBackground style={{ flex: 1 }} source={skyline ? skylineBG : hdBMW} resizeMode="cover">
      <StatusBar animated translucent barStyle={isDark ? 'light-content' : 'dark-content'} />

      <SafeAreaView style={{ flex: 1, backgroundColor: primaryOpacity }}>{children}</SafeAreaView>
    </ImageBackground>
  );
};

export default AppBackground;
