/*

The FadeInView.js Exports a React-Native Functional Component
- Component is not connected to Redux

- FadeInView is an Animated.View that will fade-in it's children components
- Animation props.duration can be passed in milliseconds, else defaults to 5000 (5seconds)

---> TL;DR FadeIn Animation Container <---

*/

// Import React Dependencies
import React, { useRef, useEffect } from 'react';
import { Animated } from 'react-native';

const FadeInView = (props) => {
  // Init fade Opacity to 0;
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  // Set Duration to props.duration or default to 5 seconds
  const duration = props.duration ? props.duration : 5000;

  // Set Anumation Timing Properties
  const timing = { toValue: 1, duration, useNativeDriver: true };

  // Animation effect
  useEffect(() => Animated.timing(fadeAnim, timing).start(), [fadeAnim]);

  return (
    <Animated.View style={{ ...props.style, opacity: fadeAnim }}>{props.children}</Animated.View>
  );
};

export default FadeInView;
