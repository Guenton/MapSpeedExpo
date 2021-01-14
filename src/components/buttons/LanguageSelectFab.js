/*

---> TL;DR Change Language Floating Action Button <---

*/

// Import React Native Dependencies
import React from 'react';
import { Dimensions, View } from 'react-native';
import { connect } from 'react-redux';
import { ScaledSheet } from 'react-native-size-matters';

// Get button width based on device width
const width = Dimensions.get('window').width * 0.15;
const height = Dimensions.get('window').height;

// Styles
const styles = ScaledSheet.create({
  container: {
    // Circle Dimensions
    width: width,
    height: width,
    borderRadius: width,
    // Circle Content
    justifyContent: 'center',
    // Circle Shadows IOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Circle Shadows Android
    elevation: 5,
  },
});

const LanguageSelectFab = (props) => {
  // Set backgroundColor depending on Redux isDark state
  const backgroundColor = props.color.isDark ? props.color.black : props.color.white;

  // Set borderColor depending on Redux isDark state
  const borderColor = props.color.isDark ? props.color.primary : props.color.white;

  // Set Style for Container
  const styleContainer = { borderColor, backgroundColor };

  // Set Style for Title
  const styleTitle = { color: props.color.primary };

  // Return Customized Elements Button Component
  return <View style={[styles.container, styleContainer, props.style]}></View>;
};

// Map Redux states to "props" passed to functional component
const mapStateToProps = (state) => ({ color: state.color });

// Connect Functional Component to Redux and Export
export default connect(mapStateToProps)(LanguageSelectFab);
