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

const styles = ScaledSheet.create({
  mapSpeedlogo: {
    marginTop: '50@s',
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

  useBackHandler(() => {
    BackHandler.exitApp();
    return true;
  });

  useEffect(() => {
    dispatch(setNextTopCirclePosition(scale(-500)));
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
