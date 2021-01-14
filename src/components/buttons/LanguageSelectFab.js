/*

---> TL;DR Change Language Floating Action Button <---

*/

// Import React Native Dependencies
import React from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import FabContainer from '../containers/FabContainer';

const LanguageSelectFab = (props) => {
  // Return Customized Elements Button Component
  return <FabContainer style={[props.style]}></FabContainer>;
};

// Map Redux states to "props" passed to functional component
const mapStateToProps = (state) => ({ lang: state.lang.currentLang });

// Connect Functional Component to Redux and Export
export default connect(mapStateToProps)(LanguageSelectFab);
