import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { useSpring, animated } from '@react-spring/native';

const AnimatedView = animated(View);

const FadeInView = ({ children, style }) => {
  const transitioning = useSelector((state) => state.animation.transitioning);

  const fadeIn = useSpring({
    to: { ...style, opacity: transitioning ? 0 : 1 },
    from: { ...style, opacity: transitioning ? 1 : 0 },
  });

  return <AnimatedView style={fadeIn}>{children}</AnimatedView>;
};

export default FadeInView;
