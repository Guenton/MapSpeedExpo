/*

---> TL;DR React Native Component for Google Logo <---

*/

// Import React Dependencies
import React from 'react';
import { Image } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

// Import Image from Assets
const google = require('../../assets/images/google.png');

// Styles
const styles = ScaledSheet.create({ logo: { width: '25@s', height: '25@s' } });

const GoogleLogo = (props) => (
  <Image style={[styles.logo, props.style]} source={google} resizeMode="contain" />
);

// Export
export default GoogleLogo;
