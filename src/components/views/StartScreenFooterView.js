/*

---> TL;DR View Encompassing the bottom part of the Start Screen<---

*/

// Import React Dependencies
import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import { Dimensions, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Transition, Transitioning } from 'react-native-reanimated';
import i18n from 'i18n-js';

// Import Components
import FadeInFooter from '../animations/FadeInFooter';
import IconFab from '../buttons/IconFab';
import LanguageSelectFab from '../buttons/LanguageSelectFab';
import SelectAppLangForm from '../forms/SelectAppLangForm';
import GuentonLogo from '../images/GuentonLogo';

// Import Redux Actions
import { toggleDark } from '../../store/actions/color';
import { setCurrentLang } from '../../store/actions/lang';

// Get Width information from Dimensions API
const width = Dimensions.get('window').width;

// Styles
const styles = ScaledSheet.create({
  container: { flex: 1, width, flexDirection: 'row', justifyContent: 'space-between' },
  left: { flexDirection: 'column-reverse' },
  right: { flexDirection: 'column-reverse' },
  bottom: { flexDirection: 'row', padding: '10@s' },
  fab: { marginRight: '10@s' },
  guenton: { marginBottom: '5@s', marginRight: '5@s' },
});

// Animation Transition Config
const animTransition = (
  <Transition.Together>
    <Transition.In type="slide-bottom" durationMs={200} />
    <Transition.Change />
    <Transition.Out type="scale" durationMs={300} />
  </Transition.Together>
);

const StartScreenFooterView = (props) => {
  // Animation Reference
  const animRef = useRef();

  // Init Language Select form to false
  const [showLangs, setShowLangs] = useState(false);

  const setLanguagePack = (language = 'en') => {
    if (language === 'pap') i18n.locale = language;
    else if (language === 'nld') i18n.locale = 'nl';
    else if (language === 'spa') i18n.locale = 'es';
    else i18n.locale = 'en';
  };

  // Return StartScreen Footer
  return (
    <FadeInFooter>
      <View style={styles.container}>
        {/* Left Section - Animated */}
        <Transitioning.View ref={animRef} transition={animTransition} style={styles.left}>
          {/* Bottom Buttons */}
          <View style={styles.bottom}>
            {/* Language Selection Button */}
            <LanguageSelectFab
              style={styles.fab}
              onPress={() => {
                animRef.current.animateNextTransition();
                setShowLangs(!showLangs);
              }}
            />

            {/* Light/Dark Swith Fab */}
            <IconFab
              style={styles.fab}
              reverse={props.isDark}
              name="adjust"
              onPress={() => props.toggleDark()}
            />
          </View>

          {/* Language Select Animated Form */}
          {showLangs && (
            <SelectAppLangForm
              onSelect={(selected) => {
                props.setCurrentLang(selected);
                setLanguagePack(selected);
                animRef.current.animateNextTransition();
                setShowLangs(false);
              }}
            />
          )}
        </Transitioning.View>

        {/* Right Section */}
        <View style={styles.right}>
          {/* Guenton Logo */}
          <GuentonLogo style={styles.guenton} />
        </View>
      </View>
    </FadeInFooter>
  );
};

// Map Redux states to "props" passed to functional component
const mapStateToProps = (state) => ({ isDark: state.color.isDark });

// Map Redux dispatch actions to "props" passed to functional component
const mapDispatchToProps = { toggleDark, setCurrentLang };

// Connect Functional Component to Redux and Export
export default connect(mapStateToProps, mapDispatchToProps)(StartScreenFooterView);
