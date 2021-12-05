
import React, { useEffect } from 'react';
import { Dimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { ScaledSheet } from 'react-native-size-matters';
import { useSpring, animated } from 'react-spring';

import { setBottomCirclePosition } from '../../../redux/animation/animation.actions';

const width = Dimensions.get('window').width * 3;
const styles = ScaledSheet.create({
  circle: {
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
  const bottomCirclePosition = useSelector(state => state.animation.bottomCirclePosition);

  const transitionMarginBottom = useSpring({
    to: { ...styles.circle, marginBottom: position },
    from: { ...styles.circle, marginBottom: bottomCirclePosition || marginTop: width / 2.7, },
    onRest: () => dispatch(setBottomCirclePosition(position)),
  });

  return <AnimatedView style={transitionMarginBottom}></AnimatedView>;
};

export default SlideInBottomCircle;
