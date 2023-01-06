import React from 'react';
import { View } from 'react-native';
import { ScaledSheet, scale } from 'react-native-size-matters';
import ScaleInView from '../animations/ScaleInView';
import IconFab from '../buttons/IconFab';
import GuentonLogo from '../images/GuentonLogo';

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    marginRight: '5@s',
    marginBottom: '5@s',
    marginLeft: '12@s',
    justifyContent: 'space-between',
  },
  logoContainer: {
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
  },
});

const BottomBackButtonLogo = ({ onPress }) => {
  return (
    <ScaleInView style={styles.container}>
      <IconFab name="angle-double-left" size={scale(40)} reverse onPress={() => onPress()} />

      <View style={styles.logoContainer}>
        <GuentonLogo />
      </View>
    </ScaleInView>
  );
};

export default BottomBackButtonLogo;
