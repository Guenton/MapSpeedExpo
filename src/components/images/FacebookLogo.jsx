import React from 'react';
import { Image } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

const facebook = require('../../assets/images/facebook.png');

const styles = ScaledSheet.create({
  logo: { width: '25@s', height: '25@s' },
});

const FacebookLogo = ({ style }) => (
  <Image style={{ ...styles.logo, ...style }} source={facebook} resizeMode="contain" />
);

export default FacebookLogo;
