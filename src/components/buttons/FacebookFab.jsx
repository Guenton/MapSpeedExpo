import React from 'react';

import FabContainer from '../containers/FabContainer';
import FacebookLogo from '../images/FacebookLogo';

const FacebookFab = ({ style, onPress }) => {
  return (
    <FabContainer style={style} onPress={() => (onPress ? onPress() : {})}>
      <FacebookLogo />
    </FabContainer>
  );
};

export default FacebookFab;
