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
import MapLogo from '../components/images/MapLogo';
import StartScreenFooterView from '../components/views/StartScreenFooterView';
import IconFab from '../components/buttons/IconFab';

// Styles
const styles = ScaledSheet.create({ logo: { marginTop: '50@vs' }, start: { alignSelf: 'center' } });

const StartScreen = () => {
  // Start Press Handler
  const onPressStart = () => console.log('start pressed');

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
        <MapLogo style={styles.logo} />

        {/* Start Floating Action Button */}
        <IconFab style={styles.start} reverse name="power-off" size={60} onPress={onPressStart} />
      </FadeInAppContent>
      {/* Footer */}
      <StartScreenFooterView />
    </AppBackground>
  );
};

export default StartScreen;
