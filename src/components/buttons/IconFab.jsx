import React from 'react';
import { connect } from 'react-redux';
import { scale } from 'react-native-size-matters';
import { Icon } from 'react-native-elements';

import FabContainer from '../containers/FabContainer';

const IconFab = (props) => (
  <FabContainer
    style={props.style}
    size={props.size || null}
    reverse={props.reverse}
    onPress={() => props.onPress()}>
    <Icon
      name={props.name || null}
      type="font-awesome-5"
      color={props.primaryColor}
      size={props.size ? props.size * 0.4 : scale(25)}
      reverse={props.reverse}
    />
  </FabContainer>
);

const mapStateToProps = (state) => ({
  primaryColor: state.color.primary,
  isDark: state.color.isDark,
});

export default connect(mapStateToProps)(IconFab);
