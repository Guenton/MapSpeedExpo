import React from 'react';
import { ScaledSheet, scale } from 'react-native-size-matters';
import IconFab from './IconFab';

const styles = ScaledSheet.create({
  container: { alignSelf: 'center' },
});

const StartFab = ({ onPress }) => {
  return (
    <IconFab
      style={styles.container}
      name="power-off"
      size={scale(60)}
      onPress={() => onPress()}
      reverse
    />
  );
};

export default StartFab;
