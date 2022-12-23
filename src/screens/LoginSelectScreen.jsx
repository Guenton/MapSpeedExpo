import React, { useEffect, useState } from 'react';
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
import { setNextBottomCirclePosition, setNextTopCirclePosition } from '../store/actions/animation';

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

  useBackHandler(() => {
    dispatch(setRoute('start'));
    return true;
  });

  useEffect(() => {
    dispatch(setNextTopCirclePosition(scale(-400)));
    dispatch(setNextBottomCirclePosition(scale(500)));
  }, [topCirclePosition, bottomCirclePosition]);

  const handleLoginTypeSelect = (loginType) => {
    switch (loginType) {
      case 'user':
        return null;
      case 'google':
        return null;
      case 'facebook':
        return loginWithFacebook();
      default:
        break;
    }
  };

  const loginWithFacebook = () => {
    console.log('feestboek');
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
