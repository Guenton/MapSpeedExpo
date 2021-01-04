// Import React Native Dependencies
import React from 'react';
import { Dimensions, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { connect } from 'react-redux';
import Animated, { Easing } from 'react-native-reanimated';

const SlideInBottomCircle = (props) => {
  // Set Circle Color for depending on Redux isDark State
  const circleColor = props.color.isDark ? props.color.black : props.color.white;

  // Style Background Object
  const styleBackground = { backgroundColor: circleColor };

  // Init Animation transX value to 0
  const transX = new Value(0);

  // Configure Animation Properties
  const animConfig = {
    duration: 5000,
    toValue: 180,
    easing: Easing.inOut(Easing.ease),
  };

  // Move Animation
  const anim = timing(transX, animConfig);

  // Style Transform Object
  const styleAnim = { transform: [{ translateX: transX }] };

  // Return Circle View
  return <Animated.View style={[styles.circle, styleBackground, styleAnim]}></Animated.View>;
};

// Destructure Animation Properties
const { Value, timing } = Animated;

// Get circle width based on device width
const width = Dimensions.get('window').width * 3;

// Styles using ScaledSheets
const styles = ScaledSheet.create({
  circle: {
    // Circle Sizing
    height: width,
    width: width,
    borderRadius: width,
    marginTop: width / 3,
    marginLeft: -width / 2,
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

// Map Redux states to "props" passed to functional component
const mapStateToProps = (state) => ({ color: state.color });

// Connect Functional Component to Redux and Export
export default connect(mapStateToProps)(SlideInBottomCircle);
