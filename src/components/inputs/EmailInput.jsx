import React from 'react';
import { Icon, Input } from 'react-native-elements';
import { ScaledSheet } from 'react-native-size-matters';
import i18n from 'i18n-js';

import { primary } from '../../config/colors';

const styles = ScaledSheet.create({
  container: {
    height: '50@s',
  },
  error: {
    marginTop: 0,
    marginLeft: '10@s',
  },
  text: {
    fontSize: '14@s',
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
}) => (
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
    placeholder={i18n.t('email')}
    leftIcon={<Icon type="font-awesome-5" name="at" color={primary} />}
    onFocus={() => (onFocus ? onFocus() : {})}
    onBlur={() => (onBlur ? onBlur() : {})}
    onChangeText={(val) => (onChange ? onChange(val) : {})}
  />
);

export default EmailInput;