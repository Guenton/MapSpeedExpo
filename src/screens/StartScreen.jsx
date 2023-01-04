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

import { setNextBottomCirclePosition, setNextTopCirclePosition } from '../store/actions/animation';
import hasBiometricsAsync from '../services/auth/hasBiometricsAsync';
import { setAlert, setRoute } from '../store/actions/core';
import getStoredPasswordAsync from '../services/auth/getStoredPasswordAsync';
import getStoredGoogleIdTokenAsync from '../services/auth/getStoredGoogleIdTokenAsync';
import getStoredFacebookAccessTokenAsync from '../services/auth/getStoredFacebookAccessTokenAsync';
import biometricPasswordSignInAsync from '../services/auth/biometricPasswordSignInAsync';
import biometricGoogleSignInAsync from '../services/auth/biometricGoogleSignInAsync';
import biometricFacebookSignInAsync from '../services/auth/biometricFacebokSignInAsync';
import AlertBox from '../components/containers/AlertBox';

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

  const [password, setPassword] = useState(null);
  const [googleId, setGoogleId] = useState(null);
  const [facebookAccess, setFacebookAccess] = useState(null);

  useBackHandler(() => {
    BackHandler.exitApp();
    return true;
  });

  useEffect(() => {
    dispatch(setNextTopCirclePosition(scale(-550)));
    dispatch(setNextBottomCirclePosition(scale(400)));
  }, [topCirclePosition, bottomCirclePosition]);

  useEffect(() => {
    setShowLanguageSelectForm(false);
  }, [currentLang]);

  useEffect(() => {
    getStoredPasswordAsync()
      .then((storedPassword) => setPassword(storedPassword))
      .catch((err) => dispatch(setAlert(err)));
  }, []);

  useEffect(() => {
    getStoredGoogleIdTokenAsync()
      .then((idToken) => setGoogleId(idToken))
      .catch((err) => dispatch(setAlert(err)));
  }, []);

  useEffect(() => {
    getStoredFacebookAccessTokenAsync()
      .then((accessToken) => setFacebookAccess(accessToken))
      .catch((err) => dispatch(setAlert(err)));
  }, []);

  useEffect(() => {
    hasBiometricsAsync()
      .then((isAvailable) => {
        if (isAvailable && password) {
          biometricPasswordSignInAsync(password)
            .then(() => dispatch(setRoute('main')))
            .catch((err) => dispatch(setAlert(err)));
        }
      })
      .catch((err) => dispatch(setAlert(err)));
  }, [password, googleId, facebookAccess]);

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
