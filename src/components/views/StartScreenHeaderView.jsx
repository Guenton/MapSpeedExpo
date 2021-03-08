// Import React Native Dependencies
import React from 'react';
import { ScaledSheet } from 'react-native-size-matters';

// Import Components
import FadeInAppContent from '../animations/FadeInAppContent';
import IconFab from '../buttons/IconFab';
import MapLogo from '../images/MapLogo';

// Styles
const styles = ScaledSheet.create({ logo: { marginTop: '50@vs' }, start: { alignSelf: 'center' } });

const StartScreenHeaderView = (props) => (
  <FadeInAppContent>
    {/* Start Logo */}
    <MapLogo style={styles.logo} />

    {/* Start Floating Action Button */}
    <IconFab style={styles.start} name="power-off" size={60} onPress={props.onStartPress} reverse />
  </FadeInAppContent>
);

export default StartScreenHeaderView;
