import React from 'react';
import { Image } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

const google = require('../../assets/images/google.png');

const styles = ScaledSheet.create({
  logo: { width: '25@s', height: '25@s' },
});

const GoogleLogo = ({ style }) => {
  return (
  <Image style={{ ...styles.logo, ...style }} source={google} resizeMode="contain" />
)};

export default GoogleLogo;
