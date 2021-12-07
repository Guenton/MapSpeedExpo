import React from 'react';
import { Dimensions } from 'react-native';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

const width = Dimensions.get('window').width;
const styles = ScaledSheet.create({
  container: { flex: 1, width, zIndex: 6, elevation: 6 },
});

const Footer = ({ children }) => <View style={styles.container}>{children}</View>;

export default Footer;
