import React from 'react';
import { Image, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';
import { ScaledSheet } from 'react-native-size-matters';

const guentonWhite = require('../../assets/images/guentonWhite.png');
const guentonBlack = require('../../assets/images/guentonBlack.png');

const width = Dimensions.get('window').width * 0.25;
const styles = ScaledSheet.create({
  logo: { width, height: width * 0.25 },
});

const GuentonLogo = ({ style }) => {
  const isDark = useSelector((state) => state.core.isDark);

  return (
    <Image
      style={{ ...styles.logo, ...style }}
      source={isDark ? guentonWhite : guentonBlack}
      resizeMode="contain"
    />
  );
};

export default GuentonLogo;
