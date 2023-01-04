import React, { useEffect } from 'react';
import { BackHandler } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useBackHandler } from '@react-native-community/hooks';
import { ScaledSheet, scale } from 'react-native-size-matters';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import AppBackground from '../components/containers/AppBackground';
import SlidingCircles from '../components/animations/SlidingCircles';
import FadeInAppContent from '../components/animations/FadeInAppContent';
import TopBar from '../components/containers/TopBar';
import FlexSpacer from '../components/containers/FlexSpacer';
import VehicleDetailForm from '../components/forms/VehicleDetailForm';
import AlertBox from '../components/containers/AlertBox';

import { setNextBottomCirclePosition, setNextTopCirclePosition } from '../store/actions/animation';
import { setRoute } from '../store/actions/core';
import { getCurrentUserId } from '../firebase/auth';
import { setUserId } from '../store/actions/auth';
import { useTranslation } from 'react-i18next';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    marginTop: '-10@s',
    marginBottom: '10@s',
    marginHorizontal: '10@s',
  },
  content: {
    height: '550@s',
  },
});

const VehicleDetailScreen = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const transitioning = useSelector((state) => state.animation.transitioning);
  const topCirclePosition = useSelector((state) => state.animation.topCirclePosition);
  const bottomCirclePosition = useSelector((state) => state.animation.bottomCirclePosition);

  useBackHandler(() => {
    dispatch(setRoute('main'));
    return true;
  });

  useEffect(() => {
    const userId = getCurrentUserId();
    if (userId) dispatch(setUserId(userId));
    else dispatch(setRoute('start'));
  }, []);

  useEffect(() => {
    dispatch(setNextTopCirclePosition(scale(-775)));
    dispatch(setNextBottomCirclePosition(scale(100)));
  }, [topCirclePosition, bottomCirclePosition]);

  return (
    <AppBackground>
      <SlidingCircles />

      {!transitioning && (
        <FadeInAppContent>
          <TopBar label={t('vehicleDetails')} />

          <FlexSpacer style={{ flex: 0.25 }} />
          <KeyboardAwareScrollView style={styles.container} contentContainerStyle={styles.content}>
            <VehicleDetailForm />
            <AlertBox />
          </KeyboardAwareScrollView>
        </FadeInAppContent>
      )}
    </AppBackground>
  );
};

export default VehicleDetailScreen;
