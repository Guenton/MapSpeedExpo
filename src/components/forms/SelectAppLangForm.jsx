import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ScaledSheet } from 'react-native-size-matters';

import LanguageSelectFab from '../buttons/LanguageSelectFab';
import { setCurrentLang } from '../../store/actions/lang';

import { white, darkGrey } from '../../config/colors';

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'column',
    height: '200@s',
    width: '25@s',
    borderRadius: '25@s',
    marginBottom: '-40@s',
    paddingBottom: '40@s',
    marginLeft: '28.5@s',
    // Shadows
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    zIndex: -1,
    elevation: 4,
  },
  topButton: { marginTop: '-25@s', marginLeft: '-13.5@s' },
  button: { marginTop: '9@s', marginLeft: '-13.5@s' },
});

const SelectAppLangForm = ({ style }) => {
  const dispatch = useDispatch();
  const availableLang = useSelector((state) => state.lang.availableLang);
  const currentLang = useSelector((state) => state.lang.currentLang);

  const isDark = useSelector((state) => state.core.isDark);

  const [langArray, setLangArray] = useState([]);

  useEffect(() => {
    setLangArray(availableLang.filter((item) => item !== currentLang));
  }, [availableLang, currentLang]);

  const selectLanguage = (languageCode = '') => dispatch(setCurrentLang(languageCode));

  return (
    <View style={{ ...styles.container, ...style, backgroundColor: isDark ? darkGrey : white }}>
      <LanguageSelectFab
        style={styles.topButton}
        flag={langArray[0]}
        onPress={() => selectLanguage(langArray[0])}
      />
      <LanguageSelectFab
        style={styles.button}
        flag={langArray[1]}
        onPress={() => selectLanguage(langArray[1])}
      />
      <LanguageSelectFab
        style={styles.button}
        flag={langArray[2]}
        onPress={() => selectLanguage(langArray[2])}
      />
    </View>
  );
};

export default SelectAppLangForm;
