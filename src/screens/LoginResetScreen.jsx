import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
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
import FlexSpacer from '../components/containers/FlexSpacer';

import { setAlert, setRoute } from '../store/actions/core';
import {
  setMorphing,
  setNextBottomCirclePosition,
  setNextTopCirclePosition,
} from '../store/actions/animation';
import LoginResetForm from '../components/forms/LoginResetForm';
import BottomBackButtonLogo from '../components/containers/BottomBackButtonLogo';

const styles = ScaledSheet.create({
  mapSpeedlogo: { marginTop: '15@s' },
  topMessage: { alignSelf: 'center', marginTop: '-10@s' },
  container: {
    flex: 1,
    marginTop: '-10@s',
    marginBottom: '10@s',
    marginHorizontal: '10@s',
  },
  content: {
    height: '300@s',
  },
  form: {
    height: '250@s',
    marginTop: '15@s',
    marginLeft: '-25@s',
  },
});

const LoginResetScreen = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const isKeyboardOpen = useSelector((state) => state.core.isKeyboardOpen);

  const transitioning = useSelector((state) => state.animation.transitioning);
  const topCirclePosition = useSelector((state) => state.animation.topCirclePosition);
  const bottomCirclePosition = useSelector((state) => state.animation.bottomCirclePosition);

  const [form, setForm] = useState('login');

  useBackHandler(() => {
    dispatch(setRoute('login-password'));
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
  }, [form]);

  return (
    <AppBackground>
      <SlidingCircles />

      {!transitioning && (
        <FadeInAppContent>
          <MapSpeedLogo style={styles.mapSpeedlogo} />
          <SubHeader label={t('pleaseLogin')} style={styles.topMessage} />

          <FlexSpacer style={{ flex: 0.5 }} />

          <KeyboardAwareScrollView style={styles.container} contentContainerStyle={styles.content}>
            <LoginResetForm />
            <AlertBox />
          </KeyboardAwareScrollView>

          {!isKeyboardOpen && (
            <BottomBackButtonLogo onPress={() => dispatch(setRoute('login-password'))} />
          )}
        </FadeInAppContent>
      )}
    </AppBackground>
  );
};

export default LoginResetScreen;
