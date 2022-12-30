import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { ScaledSheet } from 'react-native-size-matters';

import { white, black, primary } from '../../config/colors';

const styles = ScaledSheet.create({
  container: {
    height: '33@s',
  },
  text: {
    fontSize: '24@s',
    fontWeight: 'bold',
  },
});

const Header = ({ style, label }) => {
  const isDark = useSelector((state) => state.core.isDark);

  return (
    <View style={{ ...styles.container, ...style }}>
      <Text style={{ ...styles.text, color: primary }}>{label}</Text>
    </View>
  );
};

export default Header;
