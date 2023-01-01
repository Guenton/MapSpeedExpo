import React from 'react';
import { useSelector } from 'react-redux';
import { Input } from 'react-native-elements';
import { ScaledSheet } from 'react-native-size-matters';
import { useTranslation } from 'react-i18next';

import { white } from '../../config/colors';

const styles = ScaledSheet.create({
  container: {
    height: '30@s',
    flex: 1,
  },
  inputContainer: {
    height: '30@s',
  },
  label: {
    fontSize: '12@s',
  },
  error: {
    marginTop: 0,
    marginLeft: '10@s',
  },
  text: {
    fontSize: '12@s',
    marginLeft: '5@s',
  },
});

const BodyClassInput = ({
  inputRef,
  containerStyle,
  value,
  errorMessage,
  onFocus,
  onBlur,
  onChange,
}) => {
  const { t } = useTranslation();

  const isDark = useSelector((state) => state.core.isDark);

  return (
    <Input
      ref={inputRef}
      value={value}
      errorMessage={errorMessage}
      containerStyle={{ ...styles.container, ...containerStyle }}
      errorStyle={styles.error}
      inputStyle={{ ...styles.text, color: isDark ? white : null }}
      inputContainerStyle={styles.inputContainer}
      labelStyle={styles.label}
      label={t('bodyClass')}
      autoCapitalize="characters"
      autoCompleteType="vin"
      keyboardType="default"
      textContentType="none"
      placeholder={t('bodyClass')}
      onFocus={() => (onFocus ? onFocus() : {})}
      onBlur={() => (onBlur ? onBlur() : {})}
      onChangeText={(val) => (onChange ? onChange(val) : {})}
    />
  );
};

export default BodyClassInput;
