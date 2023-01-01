import React from 'react';
import { useSelector } from 'react-redux';
import { Icon, Input } from 'react-native-elements';
import { ScaledSheet, scale } from 'react-native-size-matters';
import { useTranslation } from 'react-i18next';

import { primary, white } from '../../config/colors';

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

const PasswordInput = ({
  inputRef,
  containerStyle,
  isConfirm,
  isNew,
  value,
  errorMessage,
  onFocus,
  onBlur,
  onSubmit,
  onChange,
}) => {
  const { t } = useTranslation();

  const isDark = useSelector((state) => state.core.isDark);

  const variant = () => {
    if (isConfirm) return 'confirmPassword';
    else if (isNew) return 'newPassword';
    else return 'password';
  };

  return (
    <Input
      ref={inputRef}
      value={value}
      errorMessage={errorMessage}
      containerStyle={{ ...styles.container, ...containerStyle }}
      errorStyle={styles.error}
      inputStyle={{ ...styles.text, color: isDark ? white : null }}
      autoCapitalize="none"
      autoCompleteType="password"
      textContentType={isNew ? 'newPassword' : 'password'}
      secureTextEntry
      placeholder={t(variant())}
      leftIcon={<Icon type="font-awesome-5" name="key" size={scale(16)} color={primary} />}
      onFocus={() => (onFocus ? onFocus() : null)}
      onBlur={() => (onBlur ? onBlur() : null)}
      onSubmitEditing={() => (onSubmit ? onSubmit() : null)}
      onChangeText={(val) => (onChange ? onChange(val) : null)}
    />
  );
};

export default PasswordInput;
