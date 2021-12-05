import React from 'react';
import { Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ScaledSheet } from 'react-native-size-matters';
import { useSpring, animated } from 'react-spring';

import { setTopCirclePosition } from '../../store/actions/animation';

const width = Dimensions.get('window').width * 2.5;
const styles = ScaledSheet.create({
  circle: {
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
  const topCirclePosition = useSelector(state => state.animation.topCirclePosition);

  const transitionMarginTop = useSpring({
    to: { ...styles.circle, marginTop: position },
    from: { ...styles.circle, marginTop: topCirclePosition || -width / 1.2, },
    onRest: () => dispatch(setTopCirclePosition(position)),
  });

  return (
    <AnimatedView style={transitionMarginTop}>{children}</AnimatedView>
  );
};

export default SlideInTopCircle;
