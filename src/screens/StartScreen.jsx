import React, { useEffect, useState } from 'react';
import { BackHandler, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useBackHandler } from '@react-native-community/hooks';
import { ScaledSheet, scale } from 'react-native-size-matters';

import AppBackground from '../components/containers/AppBackground';
import SlidingCircles from '../components/animations/SlidingCircles';
import FadeInAppContent from '../components/animations/FadeInAppContent';
import MapSpeedLogo from '../components/images/MapLogo';
import GuentonBotomRight from '../components/images/GuentonBottomRight';
import SelectAppLangForm from '../components/forms/SelectAppLangForm';
import LanguageSelectFab from '../components/buttons/LanguageSelectFab';
import StartFab from '../components/buttons/StartFab';
import DarkModeFab from '../components/buttons/DarkModeFab';
import AlertBox from '../components/containers/AlertBox';

import { setNextBottomCirclePosition, setNextTopCirclePosition } from '../store/actions/animation';
import { setAlert, setDarkMode, setRoute } from '../store/actions/core';
import { getCurrentUserId } from '../firebase/auth';
import hasBiometricsAsync from '../services/auth/hasBiometricsAsync';
import biometricCheckAsync from '../services/auth/biometricCheckAsync';
import { setUserId } from '../store/actions/auth';
import getKeyValueAsync from '../services/auth/getKeyValueAsync';

const styles = ScaledSheet.create({
  mapSpeedlogo: {
    marginTop: '15@s',
  },
  options: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  languageSelectFab: {
    marginLeft: '15@s',
    marginBottom: '-15@s',
  },
  darkSelectFab: {
    marginLeft: '15@s',
    marginBottom: '-15@s',
  },
});

const StartScreen = () => {
  const dispatch = useDispatch();

  const transitioning = useSelector((state) => state.animation.transitioning);
  const topCirclePosition = useSelector((state) => state.animation.topCirclePosition);
  const bottomCirclePosition = useSelector((state) => state.animation.bottomCirclePosition);
  const currentLang = useSelector((state) => state.lang.currentLang);

  const [showLanguageSelectForm, setShowLanguageSelectForm] = useState(false);
  const [hasStoredSession, setHasStoredSession] = useState(false);

  useBackHandler(() => {
    BackHandler.exitApp();
    return true;
  });

  useEffect(() => {
    getKeyValueAsync('isDark')
      .then((storedDark) => {
        if (storedDark === 'true') dispatch(setDarkMode());
        else dispatch(setDarkMode(false));
      })
      .catch((err) => dispatch(setAlert(err)));
  }, []);

  useEffect(() => {
    hasBiometricsAsync()
      .then((ok) => {
        if (ok && getCurrentUserId()) setHasStoredSession(true);
        else setHasStoredSession(false);
      })
      .catch((err) => dispatch(setAlert(err)));
  }, [getCurrentUserId()]);

  useEffect(() => {
    if (!hasStoredSession) return;

    biometricCheckAsync()
      .then((ok) => {
        if (!ok) return;
        dispatch(setUserId(getCurrentUserId()));
        dispatch(setRoute('main'));
      })
      .catch((err) => dispatch(setAlert(err)));
  }, [hasStoredSession, getCurrentUserId()]);

  useEffect(() => {
    dispatch(setNextTopCirclePosition(scale(-550)));
    dispatch(setNextBottomCirclePosition(scale(400)));
  }, [topCirclePosition, bottomCirclePosition]);

  useEffect(() => {
    setShowLanguageSelectForm(false);
  }, [currentLang]);

  const toggleLanguageSelectForm = () => setShowLanguageSelectForm(!showLanguageSelectForm);

  return (
    <AppBackground skyline>
      <SlidingCircles />

      {!transitioning && (
        <FadeInAppContent>
          <MapSpeedLogo style={styles.mapSpeedlogo} />
          <StartFab />

          <AlertBox />
          <View style={styles.options}>
            <View>
              {showLanguageSelectForm && <SelectAppLangForm />}

              <LanguageSelectFab
                style={styles.languageSelectFab}
                onPress={() => toggleLanguageSelectForm()}
              />
            </View>

            <DarkModeFab style={styles.darkSelectFab} />
          </View>

          <GuentonBotomRight />
        </FadeInAppContent>
      )}
    </AppBackground>
  );
};

export default StartScreen;
