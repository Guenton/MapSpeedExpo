import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useBackHandler } from '@react-native-community/hooks';
import { ScaledSheet, scale } from 'react-native-size-matters';
import { useTranslation } from 'react-i18next';
import delay from 'delay';

import AppBackground from '../components/containers/AppBackground';
import SlidingCircles from '../components/animations/SlidingCircles';
import FadeInAppContent from '../components/animations/FadeInAppContent';
import MapSpeedLogo from '../components/images/MapLogo';
import SubHeader from '../components/labels/SubHeader';
import GuentonBotomRight from '../components/images/GuentonBottomRight';
import LoginPasswordForm from '../components/forms/LoginPasswordForm';
import SelectLoginPasswordOptionForm from '../components/forms/SelectLoginPasswordOptionForm';
import LoginSignupForm from '../components/forms/LoginSignupForm';
import ScaleInView from '../components/animations/ScaleInView';
import AlertBox from '../components/containers/AlertBox';

import { setAlert, setRoute } from '../store/actions/core';
import {
  setMorphing,
  setNextBottomCirclePosition,
  setNextTopCirclePosition,
} from '../store/actions/animation';

const styles = ScaledSheet.create({
  mapSpeedlogo: { marginTop: '15@s' },
  topMessage: { alignSelf: 'center', marginTop: '-10@s' },
  form: {
    height: '250@s',
    marginTop: '15@s',
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

  useBackHandler(() => {
    dispatch(setRoute('login-select'));
    return true;
  });

  useEffect(() => {
    dispatch(setNextTopCirclePosition(scale(-675)));
    dispatch(setNextBottomCirclePosition(scale(225)));
  }, [topCirclePosition, bottomCirclePosition]);

  useEffect(() => {
    dispatch(setMorphing());
    delay(500)
      .then(() => dispatch(setMorphing(false)))
      .catch((err) => dispatch(setAlert(err)));
  }, [subScreen]);

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
            <ScaleInView>
              <LoginPasswordForm
                style={{
                  ...styles.form,
                  justifyContent: isKeyboardOpen ? 'flex-end' : 'flex-start',
                }}
                onGoSignup={() => setSubScreen('signup')}
                onGoReset={() => dispatch(setRoute('login-reset'))}
                onGoMain={() => dispatch(setRoute('main'))}
              />
            </ScaleInView>
          )}

          {subScreen === 'signup' && (
            <ScaleInView>
              <LoginSignupForm
                style={{
                  ...styles.form,
                  justifyContent: isKeyboardOpen ? 'flex-end' : 'flex-start',
                }}
                onGoLogin={() => setSubScreen('login')}
                onGoReset={() => dispatch(setRoute('login-reset'))}
                onGoMain={() => dispatch(setRoute('main'))}
              />
            </ScaleInView>
          )}

          <AlertBox />

          {!isKeyboardOpen && <GuentonBotomRight />}
        </FadeInAppContent>
      )}
    </AppBackground>
  );
};

export default LoginPasswordScreen;
