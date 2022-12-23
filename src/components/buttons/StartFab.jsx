import React from 'react';
import { ScaledSheet, scale } from 'react-native-size-matters';
import { useDispatch } from 'react-redux';
import IconFab from './IconFab';
import delay from 'delay';

import { setRoute } from '../../store/actions/core';
import {
  setNextBottomCirclePosition,
  setNextTopCirclePosition,
} from '../../store/actions/animation';

const styles = ScaledSheet.create({
  container: { alignSelf: 'center' },
});

const StartFab = () => {
  const dispatch = useDispatch();

  const animateToLoginScreen = async () => {
    // Move the Bubbles off Screen
    dispatch(setNextTopCirclePosition(scale(-1000)));
    dispatch(setNextBottomCirclePosition(scale(1000)));

    // Wait Half a Sec then transition
    await delay(500);
    dispatch(setRoute('login-password'));

    // Bring the Bubbles back
    dispatch(setNextTopCirclePosition(scale(-500)));
    dispatch(setNextBottomCirclePosition(scale(400)));
  };

  return (
    <IconFab
      style={styles.container}
      name="power-off"
      size={scale(60)}
      onPress={() => animateToLoginScreen()}
      reverse
    />
  );
};

export default StartFab;
