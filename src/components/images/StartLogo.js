/*

The StartLogo.js Exports a React-Native Functional Component
- Component is not connected to Redux

- StartLogo is the React-Native component for the Start Screen Logo Image
- Size is proportionate to the device width using the Dimensions API

---> TL;DR React Native Component for Application Logo <---

*/

// Import React Dependencies
import React from 'react';
import { Image, Dimensions } from 'react-native';

// Import Image from Assets
const startLogo = require('../../assets/images/mapSpeedLogo.png');

const StartLogo = () => (
  <Image style={{ width, alignSelf: 'center' }} source={startLogo} resizeMode="contain" />
);

// Get Width information from Dimensions API
const width = Dimensions.get('window').width * 0.8;

export default StartLogo;
