/*

---> TL;DR Form for selecting Language Pack for Appliaction <---

*/

// Import React Dependencies
import React, { useEffect, useState } from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import { connect } from 'react-redux';
import Animated, { Easing } from 'react-native-reanimated';

import i18n from 'i18n-js';

i18n.locale = 'pap';

// Import Components
import LanguageSelectFab from '../buttons/LanguageSelectFab';

// Destructure Animation Properties
const { Value, timing } = Animated;

// Styles
const styles = ScaledSheet.create({
  container: {
    // Dimensions
    flexDirection: 'column',
    height: '200@s',
    width: '25@s',
    // Rounded Top
    borderRadius: '25@s',
    // Fitment behind bottom button
    marginBottom: '-50@s',
    paddingBottom: '50@s',
    marginLeft: '23.5@s',
    // Shadows IOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    zIndex: -1,
    // Shadows Android
    elevation: 4,
  },
  topButton: { marginTop: '-25@s', marginLeft: '-12.5@s' },
  button: { marginTop: '9@s', marginLeft: '-12.5@s' },
});

const SelectAppLangForm = (props) => {
  // Init Language Array to empty Array
  const [langArray, setLangArray] = useState([]);

  // React to changes in current Language and update language Array
  useEffect(() => {
    // Make Array from Redux Available Languages Object
    const array = props.langAvailable;
    // Filter and take out the currently active language
    const filtered = array.filter((item) => item !== props.langCurrent);
    // Set the filtered object to state
    setLangArray(filtered);
  }, [props.langAvailable, props.langCurrent]);

  // Set backgroundColor depending on Redux isDark state
  let backgroundColor = props.color.isDark ? props.color.grey : props.color.white;
  backgroundColor = props.reverse ? props.color.primary : backgroundColor;

  // Set Style for Container
  const styleContainer = { backgroundColor };

  // Set Animation Start and End from props or default to 0
  const start = props.show ? 0 : 1;
  const end = props.show ? 1 : 0;

  // Init Animation trans value to 0
  const trans = new Value(start);

  // Configure Animation Properties
  const animConfig = {
    duration: 300,
    toValue: end,
    easing: Easing.inOut(Easing.ease),
  };

  // Move Animation
  const anim = timing(trans, animConfig);

  // Style Transform Object
  const styleAnim = { transform: [{ scaleY: trans }], opacity: trans };

  // Run Animation whenever start or end props are modified
  useEffect(() => anim.start(), [props.show, props.color.isDark]);

  // Return SelectAppLangForm
  return (
    <Animated.View style={[styles.container, styleContainer, styleAnim]}>
      <LanguageSelectFab style={styles.topButton} flag={langArray[0]} />
      <LanguageSelectFab style={styles.button} flag={langArray[1]} />
      <LanguageSelectFab style={styles.button} flag={langArray[2]} />
    </Animated.View>
  );
};

// Map Redux states to "props" passed to functional component
const mapStateToProps = (state) => ({
  color: state.color,
  langCurrent: state.lang.currentLang,
  langAvailable: state.lang.availableLang,
});

// Connect Functional Component to Redux and Export
export default connect(mapStateToProps)(SelectAppLangForm);
