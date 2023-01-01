import React from 'react';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    height: '15@s',
  },
});

const Spacer = ({ style }) => <View style={{ ...styles.container, ...style }} />;

export default Spacer;
