/*

---> TL;DR View Encompassing the bottom part of the Start Screen<---

*/

// Import React Dependencies
import React from 'react';
import { Dimensions } from 'react-native';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import FadeInFooter from '../animations/FadeInFooter';
import LanguageSelectFab from '../buttons/LanguageSelectFab';
import GuentonLogo from '../images/GuentonLogo';

// Get Width information from Dimensions API
const width = Dimensions.get('window').width;

const styles = ScaledSheet.create({
  container: { flex: 1, width, flexDirection: 'row', justifyContent: 'space-between' },
  left: { flexDirection: 'column-reverse' },
  right: { flexDirection: 'column-reverse' },
  fab: { marginBottom: '10@s', marginLeft: '10@s' },
  guenton: { marginBottom: '5@s', marginRight: '5@s' },
});

const Footer = (props) => (
  <FadeInFooter>
    <View style={styles.container}>
      {/* Left Section */}
      <View style={styles.left}>
        {/* Language Selection Button */}
        <LanguageSelectFab style={styles.fab} />
      </View>

      {/* Right Section */}
      <View style={styles.right}>
        {/* Guenton Logo */}
        <GuentonLogo style={styles.guenton} />
      </View>
    </View>
  </FadeInFooter>
);

// Export
export default Footer;
