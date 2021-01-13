/*

---> TL;DR Form for selecting Language Pack for Appliaction <---

*/

// Import React Dependencies
import React from 'react';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { connect } from 'react-redux';

const styles = ScaledSheet.create({
  container: { flexDirection: 'column' },
});

const SelectAppLangForm = (props) => {
  return <View style={styles.container}></View>;
};

// Map Redux states to "props" passed to functional component
const mapStateToProps = (state) => ({ lang: state.lang.currentLang });

// Connect Functional Component to Redux and Export
export default connect(mapStateToProps)(SelectAppLangForm);
