import React from 'react';
import { ImageBackground, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux';

const skylineBG = require('../../assets/images/skylineBG.jpg');
const hdBMW = require('../../assets/images/hdBMW.jpg');

const AppBackground = ({ children, isDark, opacity, skyline }) => (
  <ImageBackground style={{ flex: 1 }} source={skyline ? skylineBG : hdBMW} resizeMode="cover">
    <StatusBar animated translucent barStyle={isDark ? 'light-content' : 'dark-content'} />

    <SafeAreaView style={{ flex: 1, backgroundColor: opacity }}>{children}</SafeAreaView>
  </ImageBackground>
);

const mapStateToProps = (state) => ({
  opacity: state.color.primaryOpacity,
  isDark: state.color.isDark,
});

export default connect(mapStateToProps)(AppBackground);
