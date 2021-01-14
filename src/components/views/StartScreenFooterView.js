/*

---> TL;DR View Encompassing the bottom part of the Start Screen<---

*/

// Import React Dependencies
import React from 'react';
import { Dimensions } from 'react-native';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import FadeInFooter from '../animations/FadeInFooter';
import IconFab from '../buttons/IconFab';
import LanguageSelectFab from '../buttons/LanguageSelectFab';
import GuentonLogo from '../images/GuentonLogo';

// Get Width information from Dimensions API
const width = Dimensions.get('window').width;

const styles = ScaledSheet.create({
  container: { flex: 1, width, flexDirection: 'row', justifyContent: 'space-between' },
  left: { flexDirection: 'column-reverse' },
  right: { flexDirection: 'column-reverse' },
  bottom: { flexDirection: 'row', padding: '10@s' },
  fab: { marginRight: '10@s' },
  guenton: { marginBottom: '5@s', marginRight: '5@s' },
});

const Footer = (props) => (
  <FadeInFooter>
    <View style={styles.container}>
      {/* Left Section */}
      <View style={styles.left}>
        <View style={styles.bottom}>
          {/* Language Selection Button */}
          <LanguageSelectFab style={styles.fab} />
          {/* Light/Dark Swith Fab */}
          <IconFab style={styles.fab} name="adjust" />
        </View>
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
