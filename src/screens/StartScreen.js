/*

---> TL;DR Entry Screen right after Splash Screen <---

*/

// Import React Dependencies
import React from 'react';
import { ScaledSheet } from 'react-native-size-matters';

// Import Components
import AppBackground from '../components/containers/AppBackground';
import FadeInAppContent from '../components/animations/FadeInAppContent';
import SlideInTopCircle from '../components/animations/SlideInTopCircle';
import SlideInBottomCircle from '../components/animations/SlideInBottomCircle';
import StartLogo from '../components/images/StartLogo';
import StartButton from '../components/buttons/StartButton';
import StartScreenFooterView from '../components/views/StartScreenFooterView';

// Styles
const styles = ScaledSheet.create({
  logo: { marginTop: '50@vs' },
  guenton: { position: 'absolute', alignSelf: 'flex-end' },
});

const StartScreen = () => {
  // Start Press Handler
  const onPressStart = () => console.log('start');

  // Return Component
  return (
    <AppBackground>
      {/* Top Circle Animation */}
      <SlideInTopCircle start={-500} />

      {/* Bottom Circle Animation */}
      <SlideInBottomCircle start={500} />

      {/* Application Content */}
      <FadeInAppContent>
        {/* Start Logo */}
        <StartLogo style={styles.logo} />

        {/* Start Button */}
        <StartButton onPress={onPressStart} />
      </FadeInAppContent>
      {/* Footer */}
      <StartScreenFooterView />
    </AppBackground>
  );
};

export default StartScreen;
