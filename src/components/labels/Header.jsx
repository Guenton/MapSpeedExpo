import React from 'react';
import { Text, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

import { white, black } from '../../config/colors';

const styles = ScaledSheet.create({
  container: {
    height: '33@s',
  },
  text: {
    fontSize: '24@s',
    fontWeight: 'bold',
  },
});

const Header = ({ label, isBlack, style }) => {
  return (
    <View style={{ ...styles.container, ...style }}>
      <Text style={{ ...styles.text, color: isBlack ? black : white }}>{label}</Text>
    </View>
  );
};

export default Header;
