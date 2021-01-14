/*

---> TL;DR React Native Component for Application Logo <---

*/

// Import React Dependencies
import React from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { ScaledSheet } from 'react-native-size-matters';

// Import Image from Assets
const flagCur = require('../../assets/images/flagCur.png');
const flagEng = require('../../assets/images/flagEng.png');
const flagNld = require('../../assets/images/flagNld.png');
const flagSpa = require('../../assets/images/flagSpa.png');

// Styles
const styles = ScaledSheet.create({ flag: { width: '25@s', height: '25@s' } });

const LangFlag = (props) => {
  return <Image style={[styles.flag, props.style]} source={flagEng} resizeMode="contain" />;
};

// Map Redux states to "props" passed to functional component
const mapStateToProps = (state) => ({ isDark: state.color.isDark });

// Connect Functional Component to Redux and Export
export default connect(mapStateToProps)(LangFlag);
