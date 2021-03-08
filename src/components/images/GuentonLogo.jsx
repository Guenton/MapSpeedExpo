/*

---> TL;DR React Native Component for Application Logo <---

*/

// Import React Dependencies
import React from 'react';
import { Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { ScaledSheet } from 'react-native-size-matters';

// Import Image from Assets
const guentonWhite = require('../../assets/images/guentonWhite.png');
const guentonBlack = require('../../assets/images/guentonBlack.png');

// Get Width information from Dimensions API
const width = Dimensions.get('window').width * 0.25;

// Styles
const styles = ScaledSheet.create({ logo: { width, height: width * 0.25 } });

const GuentonLogo = (props) => (
  <Image
    style={[styles.logo, props.style]}
    source={props.isDark ? guentonWhite : guentonBlack}
    resizeMode="contain"
  />
);

// Map Redux states to "props" passed to functional component
const mapStateToProps = (state) => ({ isDark: state.color.isDark });

// Connect Functional Component to Redux and Export
export default connect(mapStateToProps)(GuentonLogo);
