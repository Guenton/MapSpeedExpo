import React from 'react';
import { View, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ScaledSheet } from 'react-native-size-matters';
import { useSpring, animated } from '@react-spring/native';

import { setTopCirclePosition, setTransitioning } from '../../store/actions/animation';

import { darkBlack, white } from '../../config/colors';

const width = Dimensions.get('window').width * 2.5;
const styles = ScaledSheet.create({
  circle: {
    backgroundColor: white,
    // Sizing
    height: width,
    width: width,
    borderRadius: width,
    marginTop: -width / 1.2,
    marginLeft: -width / 4,
    position: 'absolute',
    // Shadows IOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Shadows Android
    elevation: 5,
  },
});

const AnimatedView = animated(View);

const SlideInTopCircle = ({ children }) => {
  const dispatch = useDispatch();

  const isDark = useSelector((state) => state.core.isDark);
  const topCirclePosition = useSelector((state) => state.animation.topCirclePosition);
  const nextTopCirclePosition = useSelector((state) => state.animation.nextTopCirclePosition);

  const transitionMarginTop = useSpring({
    to: {
      ...styles.circle,
      marginTop: nextTopCirclePosition,
      backgroundColor: isDark ? darkBlack : white,
    },
    from: {
      ...styles.circle,
      marginTop: topCirclePosition || -width / 1.2,
    },
    onStart: () => dispatch(setTransitioning(true)),
    onRest: () => {
      dispatch(setTopCirclePosition(nextTopCirclePosition));
      dispatch(setTransitioning(false));
    },
  });

  return <AnimatedView style={transitionMarginTop}>{children}</AnimatedView>;
};

export default SlideInTopCircle;
