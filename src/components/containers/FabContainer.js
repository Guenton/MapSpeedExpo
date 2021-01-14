/*

---> TL;DR Floating Action Button Template <---

*/

// Import React Native Dependencies
import React from 'react';
import { Dimensions, View } from 'react-native';
import { connect } from 'react-redux';
import { ScaledSheet } from 'react-native-size-matters';
import { TouchableOpacity } from 'react-native';

// Get button width based on device width
const width = Dimensions.get('window').width * 0.15;

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

const FabContainer = (props) => {
  // Set backgroundColor depending on Redux isDark state
  const backgroundColor = props.color.isDark ? props.color.grey : props.color.white;

  // Set Size if given by parent ense use default
  const size = props.size
    ? { width: props.size, height: props.size, borderRadius: props.size }
    : {};

  // Set Style for Container
  const styleContainer = { backgroundColor, ...size };

  // Return Customized Elements Button Component
  return (
    <View style={[styles.container, styleContainer, props.style]}>
      <TouchableOpacity style={{ justifyContent: 'center' }} onPress={() => props.onPress()}>
        {props.children}
      </TouchableOpacity>
    </View>
  );
};

// Map Redux states to "props" passed to functional component
const mapStateToProps = (state) => ({ color: state.color });

// Connect Functional Component to Redux and Export
export default connect(mapStateToProps)(FabContainer);
