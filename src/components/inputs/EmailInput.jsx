import React from 'react';
import { Icon, Input } from 'react-native-elements';
import { ScaledSheet, scale } from 'react-native-size-matters';
import { useTranslation } from 'react-i18next';

import { primary } from '../../config/colors';

const styles = ScaledSheet.create({
  container: {
    height: '40@s',
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

const EmailInput = ({
  inputRef,
  containerStyle,
  value,
  errorMessage,
  onFocus,
  onBlur,
  onChange,
}) => {
  const { t } = useTranslation();

  return (
    <Input
      ref={inputRef}
      value={value}
      errorMessage={errorMessage}
      containerStyle={{ ...styles.container, ...containerStyle }}
      errorStyle={styles.error}
      inputStyle={styles.text}
      autoCapitalize="none"
      autoCompleteType="email"
      keyboardType="email-address"
      textContentType="emailAddress"
      placeholder={t('email')}
      leftIcon={<Icon type="font-awesome-5" name="at" size={scale(16)} color={primary} />}
      onFocus={() => (onFocus ? onFocus() : {})}
      onBlur={() => (onBlur ? onBlur() : {})}
      onChangeText={(val) => (onChange ? onChange(val) : {})}
    />
  );
};

export default EmailInput;
