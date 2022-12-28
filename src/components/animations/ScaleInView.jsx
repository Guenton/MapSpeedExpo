import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { useSpring, animated, to } from '@react-spring/native';

const AnimatedView = animated(View);

const ScaleInView = ({ children, style }) => {
  const morphing = useSelector((state) => state.animation.morphing);

  const FadeIn = useSpring({
    to: { ...style, opacity: morphing ? 0 : 1 },
    from: { ...style, opacity: morphing ? 1 : 0 },
  });

  const ScaleIn = useSpring({
    to: { x: morphing ? 0 : 1 },
    from: { x: morphing ? 1 : 0 },
  });

  return (
    <AnimatedView style={{ ...FadeIn, transform: [{ scale: ScaleIn.x }] }}>{children}</AnimatedView>
  );
};

export default ScaleInView;
