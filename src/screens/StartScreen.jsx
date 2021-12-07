import React, { useState } from 'react';
import { BackHandler } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useBackHandler } from '@react-native-community/hooks';
import { ScaledSheet, scale } from 'react-native-size-matters';
import delay from 'delay';

import AppBackground from '../components/containers/AppBackground';
import SlidingCircles from '../components/animations/SlidingCircles';
import FadeInAppContent from '../components/animations/FadeInAppContent';
import MapSpeedLogo from '../components/images/MapLogo';
import IconFab from '../components/buttons/IconFab';
import GuentonBotomRight from '../components/images/GuentonBottomRight';
import { setRoute } from '../store/actions/core';

const styles = ScaledSheet.create({
  mapSpeedlogo: { marginTop: '50@s' },
  start: { alignSelf: 'center' },
});

const StartScreen = () => {
  const dispatch = useDispatch();
  const transitioning = useSelector((state) => state.animation.transitioning);

  const [topCirclePosition, setTopCirclePosition] = useState(scale(-500));
  const [bottomCirclePosition, setBottomCirclePosition] = useState(scale(400));

  useBackHandler(() => {
    BackHandler.exitApp();
    return true;
  });

  const animateToLoginScreen = async () => {
    setTopCirclePosition(scale(-1000));
    setBottomCirclePosition(scale(1000));

    await delay(500);
    dispatch(setRoute('login-select'));

    setTopCirclePosition(scale(-500));
    setBottomCirclePosition(scale(400));
  };

  return (
    <AppBackground skyline>
      <SlidingCircles
        topCirclePosition={topCirclePosition}
        bottomCirclePosition={bottomCirclePosition}
      />

      {!transitioning && (
        <FadeInAppContent>
          <MapSpeedLogo style={styles.mapSpeedlogo} />

          <IconFab
            style={styles.start}
            name="power-off"
            size={scale(60)}
            onPress={() => animateToLoginScreen()}
            reverse
          />

          <GuentonBotomRight />
        </FadeInAppContent>
      )}
    </AppBackground>
  );
};

export default StartScreen;
