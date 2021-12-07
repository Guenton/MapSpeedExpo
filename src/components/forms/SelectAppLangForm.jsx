/*

---> TL;DR Form for selecting Language Pack for Appliaction <---

*/

// Import React Dependencies
import React, { useEffect, useState } from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import { connect } from 'react-redux';

import i18n from 'i18n-js';

i18n.locale = 'pap';

// Import Components
import LanguageSelectFab from '../buttons/LanguageSelectFab';
import { View } from 'react-native';

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
    // Filter out the currently active language from the available languages and set the rest to state
    setLangArray(props.langAvailable.filter((item) => item !== props.langCurrent));
  }, [props.langAvailable, props.langCurrent]);

  // Set backgroundColor depending on Redux isDark state then adapt if button is reverse colored
  let backgroundColor = props.color.isDark ? props.color.grey : props.color.white;
  backgroundColor = props.reverse ? props.color.primary : backgroundColor;

  // Set Style for Container
  const styleContainer = { backgroundColor };

  // Return SelectAppLangForm
  return (
    <View style={[styles.container, styleContainer]}>
      <LanguageSelectFab
        style={styles.topButton}
        flag={langArray[0]}
        onPress={() => props.onSelect(langArray[0])}
      />
      <LanguageSelectFab
        style={styles.button}
        flag={langArray[1]}
        onPress={() => props.onSelect(langArray[1])}
      />
      <LanguageSelectFab
        style={styles.button}
        flag={langArray[2]}
        onPress={() => props.onSelect(langArray[2])}
      />
    </View>
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
