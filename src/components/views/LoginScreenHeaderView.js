// Import React Native Dependencies
import React from 'react';
import { ScaledSheet } from 'react-native-size-matters';

// Import Components
import FadeInAppContent from '../animations/FadeInAppContent';
import SelectLoginTypeForm from '../forms/SelectLoginTypeForm';
import MapLogo from '../images/MapLogo';

// Styles
const styles = ScaledSheet.create({ logo: { marginTop: '50@vs' } });

const LoginScreenHeaderView = (props) => (
  <FadeInAppContent>
    {/* Start Logo */}
    <MapLogo style={styles.logo} />

    {/* Start Floating Action Button */}
    <SelectLoginTypeForm onSubmit={() => {}} />
  </FadeInAppContent>
);

export default LoginScreenHeaderView;
