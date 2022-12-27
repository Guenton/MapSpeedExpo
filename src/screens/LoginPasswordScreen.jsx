import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useBackHandler } from '@react-native-community/hooks';
import { ScaledSheet, scale } from 'react-native-size-matters';
import { useTranslation } from 'react-i18next';

import AppBackground from '../components/containers/AppBackground';
import SlidingCircles from '../components/animations/SlidingCircles';
import FadeInAppContent from '../components/animations/FadeInAppContent';
import MapSpeedLogo from '../components/images/MapLogo';
import GuentonBotomRight from '../components/images/GuentonBottomRight';
import LoginPasswordForm from '../components/forms/LoginPasswordForm';
import SubHeader from '../components/labels/SubHeader';

import { setRoute } from '../store/actions/core';
import SelectLoginPasswordOptionForm from '../components/forms/SelectLoginPasswordOptionForm';
import { setNextBottomCirclePosition, setNextTopCirclePosition } from '../store/actions/animation';
import LoginSignupForm from '../components/forms/LoginSignupForm';

const styles = ScaledSheet.create({
  mapSpeedlogo: { marginTop: '25@s' },
  topMessage: { alignSelf: 'center' },
  form: {
    height: '225@s',
    marginTop: '25@s',
    marginLeft: '-25@s',
  },
});

const LoginPasswordScreen = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const isKeyboardOpen = useSelector((state) => state.core.isKeyboardOpen);

  const transitioning = useSelector((state) => state.animation.transitioning);
  const topCirclePosition = useSelector((state) => state.animation.topCirclePosition);
  const bottomCirclePosition = useSelector((state) => state.animation.bottomCirclePosition);

  const [subScreen, setSubScreen] = useState('login');

  useEffect(() => {
    dispatch(setNextTopCirclePosition(scale(-675)));
    dispatch(setNextBottomCirclePosition(scale(225)));
  }, [topCirclePosition, bottomCirclePosition]);

  useBackHandler(() => {
    dispatch(setRoute('login-select'));
    return true;
  });

  return (
    <AppBackground>
      <SlidingCircles />

      {!transitioning && (
        <FadeInAppContent>
          <MapSpeedLogo style={styles.mapSpeedlogo} />

          <View style={{ flex: 1 }}>
            <SubHeader label={t('pleaseLogin')} style={styles.topMessage} />
          </View>

          {!isKeyboardOpen && (
            <SelectLoginPasswordOptionForm
              isLogin={subScreen === 'login'}
              isSignup={subScreen === 'signup'}
              onPressLogin={() => setSubScreen('login')}
              onPressSignup={() => setSubScreen('signup')}
            />
          )}

          {subScreen === 'login' && (
            <LoginPasswordForm
              style={{ ...styles.form, justifyContent: isKeyboardOpen ? 'flex-end' : 'flex-start' }}
              onGoSignup={() => setSubScreen('signup')}
              onGoReset={() => dispatch(setRoute('login-reset'))}
              onGoMain={() => dispatch(setRoute('main'))}
            />
          )}

          {subScreen === 'signup' && (
            <LoginSignupForm
              style={{ ...styles.form, justifyContent: isKeyboardOpen ? 'flex-end' : 'flex-start' }}
              onGoLogin={() => setSubScreen('login')}
              onGoReset={() => dispatch(setRoute('login-reset'))}
              onGoMain={() => dispatch(setRoute('main'))}
            />
          )}

          {!isKeyboardOpen && <GuentonBotomRight />}
        </FadeInAppContent>
      )}
    </AppBackground>
  );
};

export default LoginPasswordScreen;
