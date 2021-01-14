/*

---> TL;DR Start Floatin Action Button <---

*/

// Import React Native Dependencies
import React from 'react';
import { Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { ScaledSheet, scale } from 'react-native-size-matters';
import { Icon } from 'react-native-elements';
import FabContainer from '../containers/FabContainer';

// Get button width based on device width
const width = Dimensions.get('window').width * 0.3;

// Styles
const styles = ScaledSheet.create({
  container: { width, alignSelf: 'center' },
  title: { fontSize: '14@s' },
});

const StartFab = (props) => {
  // Set backgroundColor depending on Redux isDark state
  const backgroundColor = props.color.isDark ? props.color.grey : props.color.white;

  const size = scale(60);
  const iconSize = size * 0.4;

  // Return Customized Elements Button Component
  return (
    <FabContainer style={props.style} size={size} onPress={() => props.onPress()}>
      <Icon name="power-off" type="font-awesome-5" color={props.color.primary} size={iconSize} />
    </FabContainer>
  );
};

// Map Redux states to "props" passed to functional component
const mapStateToProps = (state) => ({ color: state.color });

// Connect Functional Component to Redux and Export
export default connect(mapStateToProps)(StartFab);
