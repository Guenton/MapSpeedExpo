import React from 'react';
import { scale } from 'react-native-size-matters';
import { Icon } from 'react-native-elements';

import SquareButtonContainer from '../containers/SquareButtonContainer';

import { primary } from '../../config/colors';

const SquareButton = ({ style, name, size, reverse, onPress }) => {
  return (
    <SquareButtonContainer
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
    </SquareButtonContainer>
  );
};

export default SquareButton;
