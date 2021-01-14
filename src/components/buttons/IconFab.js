/*

---> TL;DR Start Floatin Action Button <---

*/

// Import React Native Dependencies
import React from 'react';
import { connect } from 'react-redux';
import { scale } from 'react-native-size-matters';
import { Icon } from 'react-native-elements';

// Import Components
import FabContainer from '../containers/FabContainer';

const IconFab = (props) => {
  // Set Size from props or set default
  const size = props.size ? scale(props.size) : null;
  const iconSize = props.size ? props.size * 0.4 : scale(25);

  // Set Icon Name from props or default to null
  const name = props.name ? props.name : null;

  // Return Customized Elements Button Component
  return (
    <FabContainer style={props.style} size={size} onPress={() => props.onPress()}>
      <Icon name={name} type="font-awesome-5" color={props.primaryColor} size={iconSize} />
    </FabContainer>
  );
};

// Map Redux states to "props" passed to functional component
const mapStateToProps = (state) => ({ primaryColor: state.color.primary });

// Connect Functional Component to Redux and Export
export default connect(mapStateToProps)(IconFab);
