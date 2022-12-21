import React from 'react';

import FabContainer from '../containers/FabContainer';
import GoogleLogo from '../images/GoogleLogo';

const GoogleFab = ({ style, onPress }) => {
  return (
    <FabContainer style={style} onPress={() => (onPress ? onPress() : {})}>
      <GoogleLogo />
    </FabContainer>
  );
};

export default GoogleFab;
