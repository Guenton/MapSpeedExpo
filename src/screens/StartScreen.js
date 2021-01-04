/*

The Main.js Exports a React-Native Functional Component
- Component is not connected to Redux

- Main is the Main entry point of the visual part of this Application
- All Screen Components will be loaded directly into this component

---> TL;DR React Native Component for Application Logo <---

*/

// Import React Dependencies
import React from 'react';
import { View } from 'react-native';

// Import Components
import SlideInTopCircle from '../components/animations/SlideInTopCircle';
import SlideInBottomCircle from '../components/animations/SlideInBottomCircle';
import StartLogo from '../components/images/StartLogo';
import StartButton from '../components/buttons/StartButton';

const StartScreen = () => {
  // Start Press Handler
  const onPressStart = () => console.log('start');

  // Return Component
  return (
    <View style={{ flex: 1 }}>
      {/* Top Circle Animation */}
      <SlideInTopCircle></SlideInTopCircle>

      {/* Start Logo */}
      <StartLogo />

      {/* Start Button */}
      <StartButton onPress={onPressStart} />

      {/* Bottom Circle Animation */}
      <SlideInBottomCircle></SlideInBottomCircle>
    </View>
  );
};

export default StartScreen;
