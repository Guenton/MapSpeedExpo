import React from 'react';
import { Dimensions, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { connect } from 'react-redux';

const SlideInTopCircle = (props) => {
  // Set Circle Color for depending on Redux isDark State
  const circleColor = props.color.isDark ? props.color.black : props.color.white;

  // Return Circle View
  return <View style={[styles.circle, { backgroundColor: circleColor }]}></View>;
};

// Get circle width based on device width
const width = Dimensions.get('window').width * 2.5;

const styles = ScaledSheet.create({
  circle: {
    // Circle Sizing
    height: width,
    width: width,
    borderRadius: width,
    marginTop: -width / 1.6,
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

// Map Redux states to "props" passed to functional component
const mapStateToProps = (state) => ({ color: state.color });

// Connect Functional Component to Redux and Export
export default connect(mapStateToProps)(SlideInTopCircle);
