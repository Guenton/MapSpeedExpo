import React, { useEffect, useState } from 'react';
import { BackHandler, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useBackHandler } from '@react-native-community/hooks';
import { ScaledSheet, scale } from 'react-native-size-matters';

import AppBackground from '../components/containers/AppBackground';
import SlidingCircles from '../components/animations/SlidingCircles';
import FadeInAppContent from '../components/animations/FadeInAppContent';
import FlatButton from '../components/buttons/FlatButton';

import { setNextBottomCirclePosition, setNextTopCirclePosition } from '../store/actions/animation';
import { setRoute } from '../store/actions/core';
import TopBar from '../components/containers/TopBar';

const styles = ScaledSheet.create({
  container: {},
});

const MainScreen = () => {
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
    dispatch(setNextTopCirclePosition(scale(-765)));
    dispatch(setNextBottomCirclePosition(scale(300)));
  }, [topCirclePosition, bottomCirclePosition]);

  useEffect(() => {
    setShowLanguageSelectForm(false);
  }, [currentLang]);

  const toggleLanguageSelectForm = () => setShowLanguageSelectForm(!showLanguageSelectForm);

  return (
    <AppBackground>
      <SlidingCircles />

      {!transitioning && (
        <FadeInAppContent>
          <TopBar />
        </FadeInAppContent>
      )}
    </AppBackground>
  );
};

export default MainScreen;
