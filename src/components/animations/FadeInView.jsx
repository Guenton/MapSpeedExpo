import React from 'react';
import { View } from 'react-native';
import { useSpring, animated } from 'react-spring';

const AnimatedView = animated(View);

const FadeInView = ({ children, style }) => {
  const fadeIn = useSpring({ to: { ...style, opacity: 1 }, from: { ...style, opacity: 0 } });

  return <AnimatedView style={fadeIn}>{children}</AnimatedView>;
};

export default FadeInView;
