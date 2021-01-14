/*

---> TL;DR Container ensuring whatever is in it is at the bottom of the view its in <---

*/

// Import React Dependencies
import React from 'react';
import { Dimensions } from 'react-native';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

// Get Width information from Dimensions API
const width = Dimensions.get('window').width;

const styles = ScaledSheet.create({
  container: { flex: 1, width, zIndex: 6, elevation: 6 },
});

const Footer = (props) => <View style={styles.container}>{props.children}</View>;

// Export
export default Footer;
