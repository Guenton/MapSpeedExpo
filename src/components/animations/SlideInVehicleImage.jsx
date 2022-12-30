import React from 'react';
import { View, Dimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { ScaledSheet } from 'react-native-size-matters';
import { useSpring, animated } from '@react-spring/native';

import { setBottomCirclePosition, setTransitioning } from '../../store/actions/animation';

import { black, grey, white } from '../../config/colors';
import VehiclePlaceholder from '../images/VehiclePlaceholder';

const width = Dimensions.get('window').width;
const styles = ScaledSheet.create({
  container: {
    backgroundColor: white,
    // Box Sizing
    height: '250@s',
    width: width * 0.9,
    borderRadius: '20@s',
    marginTop: '150@s',
    marginLeft: width * 0.05,
    position: 'absolute',
    // Box Shadows IOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Box Shadows Android
    elevation: 5,
  },
  imageContainer: {
    flex: 1,
    margin: '10@s',
    borderRadius: '10@s',
    backgroundColor: grey,
  },
});

const AnimatedView = animated(View);

const SlideInVehicleImage = () => {
  const dispatch = useDispatch();

  const isDark = useSelector((state) => state.core.isDark);
  const bottomCirclePosition = useSelector((state) => state.animation.bottomCirclePosition);
  const nextBottomCirclePosition = useSelector((state) => state.animation.nextBottomCirclePosition);

  const transitionMarginTop = useSpring({
    to: {
      ...styles.container,
      // marginTop: 0,
      backgroundColor: isDark ? black : white,
    },
    from: {
      ...styles.container,
      // marginTop: bottomCirclePosition || width / 2.7,
    },
    onStart: () => dispatch(setTransitioning(true)),
    onRest: () => {
      // dispatch(setBottomCirclePosition(nextBottomCirclePosition));
      dispatch(setTransitioning(false));
    },
  });

  return (
    <AnimatedView style={transitionMarginTop}>
      <VehiclePlaceholder style={styles.imageContainer} />
    </AnimatedView>
  );
};

export default SlideInVehicleImage;
