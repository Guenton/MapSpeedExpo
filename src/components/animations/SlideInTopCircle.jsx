import React from 'react';
import { View, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ScaledSheet } from 'react-native-size-matters';
import { useSpring, animated } from 'react-spring';

import { setTopCirclePosition, setTransitioning } from '../../store/actions/animation';

import { black, white } from '../../config/colors';

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

const SlideInTopCircle = ({ position, children }) => {
  const dispatch = useDispatch();

  const topCirclePosition = useSelector((state) => state.animation.topCirclePosition);
  const isDark = useSelector((state) => state.core.isDark);

  const transitionMarginTop = useSpring({
    to: { ...styles.circle, marginTop: position, backgroundColor: isDark ? black : white },
    from: { ...styles.circle, marginTop: topCirclePosition || -width / 1.2 },
    onStart: () => dispatch(setTransitioning(true)),
    onRest: () => {
      dispatch(setTopCirclePosition(position));
      dispatch(setTransitioning(false));
    },
  });

  return <AnimatedView style={transitionMarginTop}>{children}</AnimatedView>;
};

export default SlideInTopCircle;
