/*

---> TL;DR Facebook Floating Action Button <---

*/

// Import React Native Dependencies
import React from 'react';

// Import Components
import FabContainer from '../containers/FabContainer';
import FacebookLogo from '../images/FacebookLogo';

const FacebookFab = (props) => (
  <FabContainer style={[props.style]} onPress={() => (props.onPress ? props.onPress() : {})}>
    <FacebookLogo />
  </FabContainer>
);

// Export
export default FacebookFab;
