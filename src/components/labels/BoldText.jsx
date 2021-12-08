import React from 'react';
import { Text, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

import { black } from '../../config/colors';

const styles = ScaledSheet.create({
  text: {
    fontSize: '14@s',
    fontWeight: 'bold',
    color: black,
  },
});

const BoldText = ({ label, style }) => (
  <View style={{ style }}>
    <Text style={styles.text}>{label}</Text>
  </View>
);

export default BoldText;
