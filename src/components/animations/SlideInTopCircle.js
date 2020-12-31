import React from 'react';
import { Dimensions, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { connect } from 'react-redux';

// Get circle width based on device width
const width = Dimensions.get('window').width * 2.5;

const styles = ScaledSheet.create({
  circle: {
    height: width,
    width: width,
    borderRadius: width,
    marginTop: -width / 1.6,
    marginLeft: -width / 4,
    position: 'absolute',
  },
});

const SlideInTopCircle = (props) => {
  const circleColor = props.color.isDark ? props.color.black : props.color.white;
  return <View style={[styles.circle, { backgroundColor: circleColor }]}></View>;
};

// Map Redux states to "props" passed to functional component
const mapStateToProps = (state) => ({ color: state.color });

// Connect Functional Component to Redux and Export
export default connect(mapStateToProps)(SlideInTopCircle);
