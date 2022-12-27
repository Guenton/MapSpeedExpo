import React from 'react';
import { useSelector } from 'react-redux';
import { scale } from 'react-native-size-matters';
import { Icon } from 'react-native-elements';

import FabContainer from '../containers/FabContainer';

const IconFab = ({ style, name, size, reverse, onPress }) => {
  const primary = useSelector((state) => state.color.primary);
  const isDark = useSelector((state) => state.color.isDark);

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
