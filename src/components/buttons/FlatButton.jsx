import React from 'react';
import { scale } from 'react-native-size-matters';
import { Icon } from 'react-native-elements';

import FlatButtonContainer from '../containers/FlatButtonContainer';

import { primary } from '../../config/colors';

const FlatButton = ({ style, name, size, reverse, onPress }) => {
  return (
    <FlatButtonContainer
      style={style}
      size={size || null}
      reverse={reverse}
      onPress={() => (onPress ? onPress() : null)}>
      <Icon
        name={name || null}
        type="font-awesome-5"
        color={primary}
        size={size ? size * 0.4 : scale(21)}
        reverse={reverse}
      />
    </FlatButtonContainer>
  );
};

export default FlatButton;
