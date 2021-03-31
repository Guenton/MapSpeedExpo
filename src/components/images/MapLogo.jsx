/*

---> TL;DR React Native Component for Application Logo <---

*/

// Import React Dependencies
import React from 'react';
import { Image, Dimensions } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

const mapLogo = require('../../assets/images/mapSpeedLogo.png');

const width = Dimensions.get('window').width * 0.45;

const styles = ScaledSheet.create({ logo: { width, alignSelf: 'center' } });

const MapLogo = ({ style }) => (
  <Image style={[styles.logo, style]} source={mapLogo} resizeMode="contain" />
);

export default MapLogo;
