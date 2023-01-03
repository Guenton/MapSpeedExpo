import React from 'react';
import { scale } from 'react-native-size-matters';
import { Avatar } from 'react-native-elements';

import FabContainer from '../containers/FabContainer';

import { grey } from '../../config/colors';

const AvatarFab = ({ style, uri, onPress }) => {
  return (
    <FabContainer style={style} size={scale(80)} onPress={() => (onPress ? onPress() : null)}>
      <Avatar
        rounded
        containerStyle={{ backgroundColor: grey }}
        size="large"
        icon={{ name: 'car', type: 'font-awesome-5' }}
        source={{ uri }}
      />
    </FabContainer>
  );
};

export default AvatarFab;
