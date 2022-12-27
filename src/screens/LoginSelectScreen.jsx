import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useBackHandler } from '@react-native-community/hooks';
import { ScaledSheet, scale } from 'react-native-size-matters';
import Constants from 'expo-constants';
import * as Google from 'expo-auth-session/providers/google';
import * as Facebook from 'expo-auth-session/providers/facebook';
import { ResponseType } from 'expo-auth-session';

import AppBackground from '../components/containers/AppBackground';
import SlidingCircles from '../components/animations/SlidingCircles';
import FadeInAppContent from '../components/animations/FadeInAppContent';
import MapSpeedLogo from '../components/images/MapLogo';
import GuentonBotomRight from '../components/images/GuentonBottomRight';
import SelectLoginTypeForm from '../components/forms/SelectLoginTypeForm';
import SelectAppLangForm from '../components/forms/SelectAppLangForm';
import LanguageSelectFab from '../components/buttons/LanguageSelectFab';

import { setRoute } from '../store/actions/core';
import { setNextBottomCirclePosition, setNextTopCirclePosition } from '../store/actions/animation';

import {
  facebookSignIn,
  getCurrentUserInfo,
  googleSignIn,
  signInWithFacebookAccessTokenAsync,
  signInWithGoogleIdTokenAsync,
} from '../firebase/auth';

const styles = ScaledSheet.create({
  mapSpeedlogo: { marginTop: '25@s' },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  languageSelectFab: {
    marginLeft: '15@s',
    marginBottom: '-10@s',
  },
});

const LoginSelectScreen = () => {
  const dispatch = useDispatch();
  const transitioning = useSelector((state) => state.animation.transitioning);

  const topCirclePosition = useSelector((state) => state.animation.topCirclePosition);
  const bottomCirclePosition = useSelector((state) => state.animation.bottomCirclePosition);

  const [showLanguageSelectForm, setShowLanguageSelectForm] = useState(false);

  const [googleReq, googleRes, googlePromptAsync] = Google.useIdTokenAuthRequest({
    clientId: Constants.expoConfig.extra.GOOGLE_WEB_CLIENT_ID,
  });
  const [facebookReq, facebookRes, facebookPromptAsync] = Facebook.useAuthRequest({
    responseType: ResponseType.Token,
    clientId: Constants.expoConfig.extra.FACEBOOK_ID,
  });

  useBackHandler(() => {
    dispatch(setRoute('start'));
    return true;
  });

  useEffect(() => {
    dispatch(setNextTopCirclePosition(scale(-400)));
    dispatch(setNextBottomCirclePosition(scale(500)));
  }, [topCirclePosition, bottomCirclePosition]);

  useEffect(() => {
    if (googleRes?.type === 'success') {
      const { id_token } = googleRes.params;
      signInWithGoogleIdTokenAsync(id_token)
        .then((user) => console.log(user))
        .catch((err) => console.error(err));
    }
  }, [googleRes]);

  useEffect(() => {
    if (facebookRes?.type === 'success') {
      const { access_token } = facebookRes.params;
      signInWithFacebookAccessTokenAsync(access_token)
        .then((user) => console.log(user))
        .catch((err) => console.error(err));
    }
  });

  const handleLoginTypeSelect = (loginType) => {
    switch (loginType) {
      case 'user':
        return dispatch(setRoute('login-password'));
      case 'google':
        return googlePromptAsync();
      case 'facebook':
        return facebookPromptAsync();
      default:
        break;
    }
  };

  const loginWithGoogle = () => {
    googleSignIn()
      .then(console.log(getCurrentUserInfo()))
      .catch((err) => console.error(err));
  };

  const loginWithFacebook = () => {
    facebookSignIn();
  };

  return (
    <AppBackground skyline>
      <SlidingCircles />

      {!transitioning && (
        <FadeInAppContent>
          <MapSpeedLogo style={styles.mapSpeedlogo} />

          <SelectLoginTypeForm onSubmit={(loginType) => handleLoginTypeSelect(loginType)} />

          <View style={styles.bottom}>
            {showLanguageSelectForm && <SelectAppLangForm />}

            <LanguageSelectFab
              style={styles.languageSelectFab}
              onPress={() => setShowLanguageSelectForm(!showLanguageSelectForm)}
            />
          </View>

          <GuentonBotomRight />
        </FadeInAppContent>
      )}
    </AppBackground>
  );
};

export default LoginSelectScreen;
