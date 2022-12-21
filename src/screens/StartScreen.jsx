import React, { useEffect, useState } from 'react';
import { BackHandler, View } from 'react-native';
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
import SelectAppLangForm from '../components/forms/SelectAppLangForm';
import LanguageSelectFab from '../components/buttons/LanguageSelectFab';

import { setRoute, toggleDarkMode } from '../store/actions/core';
import { setCurrentLang } from '../store/actions/lang';
import { setNextBottomCirclePosition, setNextTopCirclePosition } from '../store/actions/animation';

const styles = ScaledSheet.create({
  mapSpeedlogo: {
    marginTop: '50@s',
  },
  start: {
    alignSelf: 'center',
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

  const [showLanguageSelectForm, setShowLanguageSelectForm] = useState(false);

  useBackHandler(() => {
    BackHandler.exitApp();
    return true;
  });

  useEffect(() => {
    dispatch(setNextTopCirclePosition(scale(-500)));
    dispatch(setNextBottomCirclePosition(scale(400)));
  }, []);

  const animateToLoginScreen = async () => {
    // Mobe the Bubbles off Screen
    dispatch(setNextTopCirclePosition(scale(-1000)));
    dispatch(setNextBottomCirclePosition(scale(1000)));

    // Wait Half a Sec then transition
    await delay(500);
    dispatch(setRoute('login-password'));

    // Bring the Bubbles back
    dispatch(setNextTopCirclePosition(scale(-500)));
    dispatch(setNextBottomCirclePosition(scale(400)));
  };

  const setLanguageAndCloseForm = (lang) => {
    dispatch(setCurrentLang(lang));
    setShowLanguageSelectForm(false);
  };

  return (
    <AppBackground skyline>
      <SlidingCircles />

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

          <View style={styles.options}>
            <View>
              {showLanguageSelectForm && (
                <SelectAppLangForm onSelect={(lang) => setLanguageAndCloseForm(lang)} />
              )}
              <LanguageSelectFab
                style={styles.languageSelectFab}
                onPress={() => setShowLanguageSelectForm(!showLanguageSelectForm)}
              />
            </View>

            <IconFab
              style={styles.darkSelectFab}
              name="adjust"
              onPress={() => dispatch(toggleDarkMode())}
            />
          </View>

          <GuentonBotomRight />
        </FadeInAppContent>
      )}
    </AppBackground>
  );
};

export default StartScreen;
