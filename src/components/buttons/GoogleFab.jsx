/*

---> TL;DR Google Floating Action Button <---

*/

// Import React Native Dependencies
import React from 'react';

// Import Components
import FabContainer from '../containers/FabContainer';
import GoogleLogo from '../images/GoogleLogo';

const GoogleFab = (props) => (
  <FabContainer style={[props.style]} onPress={() => (props.onPress ? props.onPress() : {})}>
    <GoogleLogo />
  </FabContainer>
);

// Export
export default GoogleFab;
