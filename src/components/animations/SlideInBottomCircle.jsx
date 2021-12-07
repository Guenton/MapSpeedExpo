import React from 'react';
import { View, Dimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { ScaledSheet } from 'react-native-size-matters';
import { useSpring, animated } from 'react-spring';

import { setBottomCirclePosition, setTransitioning } from '../../store/actions/animation';

import { black, white } from '../../config/colors';

const width = Dimensions.get('window').width * 3;
const styles = ScaledSheet.create({
  circle: {
    backgroundColor: white,
    // Circle Sizing
    height: width,
    width: width,
    borderRadius: width,
    marginTop: width / 2.7,
    marginLeft: -width / 2,
    position: 'absolute',
    // Circle Shadows IOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Circle Shadows Android
    elevation: 5,
  },
});

const AnimatedView = animated(View);

const SlideInBottomCircle = ({ position }) => {
  const dispatch = useDispatch();

  const bottomCirclePosition = useSelector((state) => state.animation.bottomCirclePosition);
  const isDark = useSelector((state) => state.core.isDark);

  const transitionMarginTop = useSpring({
    to: { ...styles.circle, marginTop: position, backgroundColor: isDark ? black : white },
    from: { ...styles.circle, marginTop: bottomCirclePosition || width / 2.7 },
    onStart: () => dispatch(setTransitioning(true)),
    onRest: () => {
      dispatch(setBottomCirclePosition(position));
      dispatch(setTransitioning(false));
    },
  });

  return <AnimatedView style={transitionMarginTop}></AnimatedView>;
};

export default SlideInBottomCircle;
