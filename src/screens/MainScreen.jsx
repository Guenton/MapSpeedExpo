import React, { useEffect, useState } from 'react';
import { BackHandler, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useBackHandler } from '@react-native-community/hooks';
import { ScaledSheet, scale } from 'react-native-size-matters';

import AppBackground from '../components/containers/AppBackground';
import SlidingCircles from '../components/animations/SlidingCircles';
import FadeInAppContent from '../components/animations/FadeInAppContent';
import TopBar from '../components/containers/TopBar';

import { setNextBottomCirclePosition, setNextTopCirclePosition } from '../store/actions/animation';
import { setAlert, setLoading, setRoute, setVehicleArray } from '../store/actions/core';
import { getCurrentUserId } from '../firebase/auth';
import { setUserId } from '../store/actions/auth';
import AlertBox from '../components/containers/AlertBox';
import AddVinForm from '../components/forms/AddVinForm';
import SlideInVehicleImage from '../components/animations/SlideInVehicleImage';
import FormHeader from '../components/labels/FormHeader';
import MainBottomContainer from '../components/containers/MainBottomContainer';
import { fetchVehicleArray } from '../firebase/vehicle';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AvatarFab from '../components/buttons/AvatarFab';
import FadeInVehicleAvatar from '../components/animations/FadeInVehicleAvatar';
import VehicleInfoView from '../components/views/VehicleInfoView';

const styles = ScaledSheet.create({
  container: {},
  vehicleView: {
    marginTop: '-65@s',
  },
  vinForm: {
    marginTop: '-40@s',
  },
});

const MainScreen = () => {
  const dispatch = useDispatch();

  const transitioning = useSelector((state) => state.animation.transitioning);
  const topCirclePosition = useSelector((state) => state.animation.topCirclePosition);
  const bottomCirclePosition = useSelector((state) => state.animation.bottomCirclePosition);

  const isLoading = useSelector((state) => state.core.isLoading);
  const isKeyboardOpen = useSelector((state) => state.core.isKeyboardOpen);
  const vehicleArray = useSelector((state) => state.core.vehicleArray);

  const [hasStoredVehicles, setHasStoredVehicles] = useState(false);

  useBackHandler(() => {
    BackHandler.exitApp();
    return true;
  });

  useEffect(() => {
    const userId = getCurrentUserId();
    if (userId) dispatch(setUserId(userId));
    else dispatch(setRoute('start'));
  }, []);

  useEffect(() => {
    if (vehicleArray.length > 0) setHasStoredVehicles(true);
    else setHasStoredVehicles(false);
  }, [vehicleArray]);

  useEffect(() => {
    dispatch(setLoading());
    fetchVehicleArray()
      .then((array) => dispatch(setVehicleArray(array)))
      .catch((err) => dispatch(setAlert(err)))
      .finally(() => dispatch(setLoading(false)));
  }, []);

  useEffect(() => {
    dispatch(setNextTopCirclePosition(scale(-775)));
    if (isKeyboardOpen) dispatch(setNextBottomCirclePosition(scale(150)));
    else dispatch(setNextBottomCirclePosition(scale(250)));
  }, [topCirclePosition, bottomCirclePosition, isKeyboardOpen]);

  return (
    <AppBackground>
      <SlidingCircles />
      {hasStoredVehicles && !transitioning && <FadeInVehicleAvatar />}

      <FadeInAppContent>
        <TopBar />

        <KeyboardAwareScrollView>
          <MainBottomContainer>
            {hasStoredVehicles && <VehicleInfoView style={styles.vehicleView} />}

            {!hasStoredVehicles && !isLoading && <AddVinForm style={styles.vinForm} />}

            <AlertBox />
          </MainBottomContainer>
        </KeyboardAwareScrollView>
      </FadeInAppContent>
    </AppBackground>
  );
};

export default MainScreen;
