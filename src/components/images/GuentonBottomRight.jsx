import React from 'react';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import GuentonLogo from './GuentonLogo';

const styles = ScaledSheet.create({
  container: {
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    marginBottom: '5@s',
    marginRight: '5@s',
  },
});

const GuentonBotomRight = ({ style }) => {
  return (
    <View style={{ ...styles.container, ...style }}>
      <GuentonLogo />
    </View>
  );
};

export default GuentonBotomRight;
