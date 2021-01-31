/*

---> TL;DR React Native Component for Facebook Logo <---

*/

// Import React Dependencies
import React from 'react';
import { Image } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

// Import Image from Assets
const facebook = require('../../assets/images/facebook.png');

// Styles
const styles = ScaledSheet.create({ logo: { width: '25@s', height: '25@s' } });

const FacebookLogo = (props) => (
  <Image style={[styles.logo, props.style]} source={facebook} resizeMode="contain" />
);

// Export
export default FacebookLogo;
