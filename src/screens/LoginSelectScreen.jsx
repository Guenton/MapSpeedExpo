import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useBackHandler } from '@react-native-community/hooks';
import { ScaledSheet, scale } from 'react-native-size-matters';

import AppBackground from '../components/containers/AppBackground';
import SlidingCircles from '../components/animations/SlidingCircles';
import FadeInAppContent from '../components/animations/FadeInAppContent';
import MapSpeedLogo from '../components/images/MapLogo';
import GuentonBotomRight from '../components/images/GuentonBottomRight';
import SelectLoginTypeForm from '../components/forms/SelectLoginTypeForm';
import SelectAppLangForm from '../components/forms/SelectAppLangForm';
import LanguageSelectFab from '../components/buttons/LanguageSelectFab';

import { setRoute } from '../store/actions/core';
import { setCurrentLang } from '../store/actions/lang';

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

  const [topCirclePosition, setTopCirclePosition] = useState(scale(-400));
  const [bottomCirclePosition, setBottomCirclePosition] = useState(scale(500));

  const [showLanguageSelectForm, setShowLanguageSelectForm] = useState(false);

  useBackHandler(() => {
    dispatch(setRoute('start'));
    return true;
  });

  const setLanguageAndCloseForm = (lang) => {
    dispatch(setCurrentLang(lang));
    setShowLanguageSelectForm(false);
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

          <SelectLoginTypeForm onSubmit={() => null} />

          <View style={styles.bottom}>
            {showLanguageSelectForm && (
              <SelectAppLangForm onSelect={(lang) => setLanguageAndCloseForm(lang)} />
            )}

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
