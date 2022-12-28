import React from 'react';
import { scale } from 'react-native-size-matters';
import { Icon } from 'react-native-elements';

import FabContainer from '../containers/FabContainer';

import { primary } from '../../config/colors';

const IconFab = ({ style, name, size, reverse, onPress }) => {
  return (
    <FabContainer
      style={style}
      size={size || null}
      reverse={reverse}
      onPress={() => (onPress ? onPress() : null)}>
      <Icon
        name={name || null}
        type="font-awesome-5"
        color={primary}
        size={size ? size * 0.4 : scale(25)}
        reverse={reverse}
      />
    </FabContainer>
  );
};

export default IconFab;
