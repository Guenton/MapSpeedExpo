/*

---> TL;DR Form for selecting Language Pack for Appliaction <---

*/

// Import React Dependencies
import React, { useEffect } from 'react';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { connect } from 'react-redux';
import Animated, { Easing } from 'react-native-reanimated';

// Destructure Animation Properties
const { Value, timing } = Animated;

// Styles
const styles = ScaledSheet.create({
  container: {
    height: '200@s',
    width: '25@s',
    borderTopLeftRadius: '25@s',
    borderTopRightRadius: '25@s',
    marginBottom: '-50@s',
    paddingBottom: '50@s',
    marginLeft: '23.5@s',
    flexDirection: 'column',
  },
});

const SelectAppLangForm = (props) => {
  // Set backgroundColor depending on Redux isDark state
  let backgroundColor = props.color.isDark ? props.color.grey : props.color.white;
  backgroundColor = props.reverse ? props.color.primary : backgroundColor;

  // Set Style for Container
  const styleContainer = { backgroundColor };

  // Set Animation Start and End from props or default to 0
  const start = props.show ? 0 : 1;
  const end = props.show ? 1 : 0;

  // Init Animation trans value to 0
  const trans = new Value(start);

  // Configure Animation Properties
  const animConfig = {
    duration: 300,
    toValue: end,
    easing: Easing.inOut(Easing.ease),
  };

  // Move Animation
  const anim = timing(trans, animConfig);

  // Style Transform Object
  const styleAnim = { transform: [{ scaleY: trans }], opacity: trans };

  // Run Animation whenever start or end props are modified
  useEffect(() => anim.start(), [props.show]);

  // Return SelectAppLangForm
  return <Animated.View style={[styles.container, styleContainer, styleAnim]}></Animated.View>;
};

// Map Redux states to "props" passed to functional component
const mapStateToProps = (state) => ({ color: state.color, lang: state.lang.currentLang });

// Connect Functional Component to Redux and Export
export default connect(mapStateToProps)(SelectAppLangForm);
