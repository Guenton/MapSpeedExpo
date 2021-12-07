import React from 'react';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import GuentonLogo from './GuentonLogo';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    marginBottom: '5@s',
    marginRight: '5@s',
  },
});

const GuentonBotomRight = () => {
  return (
    <View style={styles.container}>
      <GuentonLogo />
    </View>
  );
};

export default GuentonBotomRight;
