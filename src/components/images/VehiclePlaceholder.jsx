import React from 'react';
import { Image } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

const vehiclePlaceholder = require('../../assets/images/vehiclePlaceholder.png');

const styles = ScaledSheet.create({
  container: {
    width: '300@s',
    alignSelf: 'center',
  },
});

const VehiclePlaceholder = ({ style }) => {
  return (
    <Image
      style={{ ...styles.container, ...style }}
      source={vehiclePlaceholder}
      resizeMode="contain"
    />
  );
};

export default VehiclePlaceholder;
