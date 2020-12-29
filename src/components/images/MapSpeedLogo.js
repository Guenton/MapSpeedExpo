/*

The MapSpeedLogo.js Exports a React-Native Functional Component
- Component is connected not to Redux

- MapSpeedLogo is the React-Native component for the Logo Image
- props can be submitted for height, width, xPadding and yPadding, else defaults will be used

---> TL;DR React Native Component for Application Logo <---

*/

// Import React Dependencies
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

// Import Image from Assets
const mapSpeedLogo = require('../../assets/images/mapSpeedLogoNoText.png');

const MapSpeedLogo = (props) => {
  // Set variables from props or set defaults
  const xPadding = props.xPadding ? props.xPadding : 25;
  const yPadding = props.yPadding ? props.yPadding : 25;
  const height = props.height ? props.height : 75;
  const width = props.width ? props.width : 350;

  // Styles using Scaledsheet
  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: scale(xPadding),
      paddingVertical: verticalScale(yPadding),
    },
    logo: {
      height: scale(height),
      width: verticalScale(width),
    },
  });

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={mapSpeedLogo} resizeMode="contain" />
    </View>
  );
};

export default MapSpeedLogo;
