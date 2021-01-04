// Import React Native Dependencies
import React from 'react';
import { Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { ScaledSheet } from 'react-native-size-matters';
import { Button } from 'react-native-elements';

const StartButton = (props) => {
  // Set backgroundColor depending on Redux isDark state
  const backgroundColor = props.color.isDark ? props.color.black : props.color.white;

  // Set borderColor depending on Redux isDark state
  const borderColor = props.color.isDark ? props.color.primary : props.color.white;

  // Set Style for Button
  const styleButton = { borderColor, backgroundColor };

  // Set Style for Title
  const styleTitle = { color: props.color.primary };

  // Return Customized Elements Button Component
  return (
    <Button
      onPress={() => props.onPress()}
      title={props.startLang}
      containerStyle={[styles.container, props.style]}
      buttonStyle={[styles.button, styleButton]}
      titleStyle={[styles.title, styleTitle]}
      type="outline"
      raised
    />
  );
};

// Get button width based on device width
const width = Dimensions.get('window').width * 0.3;

// Styles using ScaledSheet
const styles = ScaledSheet.create({
  container: { width, alignSelf: 'center' },
  button: { borderWidth: '1@s' },
  title: { fontSize: '16@s' },
});

// Map Redux states to "props" passed to functional component
const mapStateToProps = (state) => ({ startLang: state.lang.start, color: state.color });

// Connect Functional Component to Redux and Export
export default connect(mapStateToProps)(StartButton);
