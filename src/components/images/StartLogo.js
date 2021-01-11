/*

---> TL;DR React Native Component for Application Logo <---

*/

// Import React Dependencies
import React from 'react';
import { Image, Dimensions } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

// Import Image from Assets
const startLogo = require('../../assets/images/mapSpeedLogo.png');

// Get Width information from Dimensions API
const width = Dimensions.get('window').width * 0.35;

// Styles
const styles = ScaledSheet.create({ logo: { width, alignSelf: 'center', padding: '25@s' } });

const StartLogo = (props) => (
  <Image style={[styles.logo, props.style]} source={startLogo} resizeMode="contain" />
);

export default StartLogo;
