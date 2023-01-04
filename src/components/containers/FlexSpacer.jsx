import React from 'react';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
});

const FlexSpacer = ({ style }) => <View style={{ ...styles.container, ...style }} />;

export default FlexSpacer;
