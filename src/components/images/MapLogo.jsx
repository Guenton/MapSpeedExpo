import React from 'react';
import { Image, Dimensions } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

const mapSpeedLogo = require('../../assets/images/mapSpeedLogo.png');

const width = Dimensions.get('window').width * 0.45;
const styles = ScaledSheet.create({
  logo: { width, alignSelf: 'center' },
});

const MapSpeedLogo = ({ style }) => {
  return (
  <Image style={{ ...styles.logo, ...style }} source={mapSpeedLogo} resizeMode="contain" />
)};

export default MapSpeedLogo;
