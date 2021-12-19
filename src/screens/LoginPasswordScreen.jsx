import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useBackHandler } from '@react-native-community/hooks';
import { ScaledSheet, scale } from 'react-native-size-matters';
import I18n from 'i18n-js';

import AppBackground from '../components/containers/AppBackground';
import SlidingCircles from '../components/animations/SlidingCircles';
import FadeInAppContent from '../components/animations/FadeInAppContent';
import MapSpeedLogo from '../components/images/MapLogo';
import GuentonBotomRight from '../components/images/GuentonBottomRight';

import { setRoute } from '../store/actions/core';
import LoginForm from '../components/forms/LoginForm';
import SubHeader from '../components/labels/SubHeader';

const styles = ScaledSheet.create({
  mapSpeedlogo: { marginTop: '25@s' },
  topMessage: { alignSelf: 'center' },
  form: {
    marginLeft: '-50@s',
    height: '250@s',
  },
});

const LoginPasswordScreen = () => {
  const { t } = I18n;
  const dispatch = useDispatch();

  const isKeyboardOpen = useSelector((state) => state.core.isKeyboardOpen);
  const transitioning = useSelector((state) => state.animation.transitioning);

  const [topCirclePosition, setTopCirclePosition] = useState(scale(-650));
  const [bottomCirclePosition, setBottomCirclePosition] = useState(scale(300));

  useBackHandler(() => {
    dispatch(setRoute('start'));
    return true;
  });

  return (
    <AppBackground>
      <SlidingCircles
        topCirclePosition={topCirclePosition}
        bottomCirclePosition={bottomCirclePosition}
      />

      {!transitioning && (
        <FadeInAppContent>
          <MapSpeedLogo style={styles.mapSpeedlogo} />

          <View style={{ flex: 1 }}>
            {!isKeyboardOpen && <SubHeader label={t('pleaseLogin')} style={styles.topMessage} />}
          </View>

          <LoginForm
            style={styles.form}
            onGoSignup={() => dispatch(setRoute('login-signup'))}
            onGoReset={() => dispatch(setRoute('login-reset'))}
            onGoMain={() => dispatch(setRoute('main'))}
          />

          <GuentonBotomRight />
        </FadeInAppContent>
      )}
    </AppBackground>
  );
};

export default LoginPasswordScreen;
