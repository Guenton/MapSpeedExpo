/*

---> TL;DR React Native Component Top Circle Animation <---

*/

// Import React Native Dependencies
import React, { useEffect } from 'react';
import { Dimensions } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { connect } from 'react-redux';
import Animated, { Easing } from 'react-native-reanimated';

// Destructure Animation Properties
const { Value, timing } = Animated;

// Get circle width based on device width
const width = Dimensions.get('window').width * 2.5;

// Styles
const styles = ScaledSheet.create({
  circle: {
    // Circle Sizing
    height: width,
    width: width,
    borderRadius: width,
    marginTop: -width / 1.2,
    marginLeft: -width / 4,
    position: 'absolute',
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

const SlideInTopCircle = (props) => {
  // Set Circle Color for depending on Redux isDark State
  const circleColor = props.color.isDark ? props.color.black : props.color.white;

  // Set Animation Start and End from props or default to 0
  const start = props.start ? props.start : 0;
  const end = props.end ? props.end : 0;

  // Init Animation transY value to 0
  const transY = new Value(start);

  // Configure Animation Properties
  const animConfig = {
    duration: 300,
    toValue: end,
    easing: Easing.inOut(Easing.ease),
  };

  // Move Animation
  const anim = timing(transY, animConfig);

  // Style Transform Object
  const styleAnim = { transform: [{ translateY: transY }] };

  // Style Background Object
  const styleBackground = { backgroundColor: circleColor };

  // Run Animation whenever start or end props are modified
  useEffect(() => anim.start(), [props.start, props.end, props.color.isDark]);

  // Return Circle View
  return (
    <Animated.View style={[styles.circle, styleBackground, styleAnim]}>
      {props.children}
    </Animated.View>
  );
};

// Map Redux states to "props" passed to functional component
const mapStateToProps = (state) => ({ color: state.color });

// Connect Functional Component to Redux and Export
export default connect(mapStateToProps)(SlideInTopCircle);
