/*

---> TL;DR View Encompassing the bottom part of the Start Screen<---

*/

// Import React Dependencies
import React from 'react';
import { connect } from 'react-redux';
import { Dimensions, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

// Import Components
import FadeInFooter from '../animations/FadeInFooter';
import IconFab from '../buttons/IconFab';
import LanguageSelectFab from '../buttons/LanguageSelectFab';
import GuentonLogo from '../images/GuentonLogo';

// Import Redux Actions
import { toggleDark } from '../../store/actions/color';

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

const StartScreenFooterView = (props) => (
  <FadeInFooter>
    <View style={styles.container}>
      {/* Left Section */}
      <View style={styles.left}>
        <View style={styles.bottom}>
          {/* Language Selection Button */}
          <LanguageSelectFab style={styles.fab} />
          {/* Light/Dark Swith Fab */}
          <IconFab
            style={styles.fab}
            reverse={props.isDark}
            name="adjust"
            onPress={() => props.toggleDark()}
          />
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

// Map Redux states to "props" passed to functional component
const mapStateToProps = (state) => ({ isDark: state.color.isDark });

// Map Redux dispatch actions to "props" passed to functional component
const mapDispatchToProps = { toggleDark };

// Connect Functional Component to Redux and Export
export default connect(mapStateToProps, mapDispatchToProps)(StartScreenFooterView);
