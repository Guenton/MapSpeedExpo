import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { ScaledSheet } from 'react-native-size-matters';

import LanguageSelectFab from '../buttons/LanguageSelectFab';
import { grey, white } from '../../config/colors';

const styles = ScaledSheet.create({
  container: {
    // Dimensions
    flexDirection: 'column',
    height: '200@s',
    width: '25@s',
    // Rounded Top
    borderRadius: '25@s',
    // Fitment behind bottom button
    marginBottom: '-40@s',
    paddingBottom: '40@s',
    marginLeft: '28.5@s',
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

const SelectAppLangForm = ({ style, onSelect }) => {
  const availableLang = useSelector((state) => state.lang.availableLang);
  const currentLang = useSelector((state) => state.lang.currentLang);

  const isDark = useSelector((state) => state.core.isDark);
  const white = useSelector((state) => state.color.white);
  const grey = useSelector((state) => state.color.grey);

  const [langArray, setLangArray] = useState([]);

  useEffect(() => {
    // Filter out the currently active language from the available languages and set the rest to state
    setLangArray(availableLang.filter((item) => item !== currentLang));
  }, [availableLang, currentLang]);

  return (
    <View style={{ ...styles.container, ...style, backgroundColor: isDark ? grey : white }}>
      <LanguageSelectFab
        style={styles.topButton}
        flag={langArray[0]}
        onPress={() => onSelect(langArray[0])}
      />
      <LanguageSelectFab
        style={styles.button}
        flag={langArray[1]}
        onPress={() => onSelect(langArray[1])}
      />
      <LanguageSelectFab
        style={styles.button}
        flag={langArray[2]}
        onPress={() => onSelect(langArray[2])}
      />
    </View>
  );
};

export default SelectAppLangForm;
