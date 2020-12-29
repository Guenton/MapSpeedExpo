/*

The SkylineBG.js Exports a React-Native Functional Component
- Component is connected not to Redux

- SkylineBG is the React-Native component for the Logo Image
- props can be submitted for height, width, xPadding and yPadding, else defaults will be used

---> TL;DR React Native Component for Application Logo <---

*/

// Import React Dependencies
import React from 'react';
import { Image } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

// Import Image from Assets
const skylineBG = require('../../assets/images/skylineBG.jpg');

// Styles Using ScaledSheets
const styles = ScaledSheet.create({logo: { flex: 1 }});

const SkylineBG = (props) => {
  // return Image and place children inside it
  return <Image style={styles.logo} source={skylineBG} resizeMode="cover">{props.children}</Image>;
};

export default SkylineBG;
