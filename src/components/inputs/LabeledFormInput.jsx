import React from 'react';
import { useSelector } from 'react-redux';
import { Input } from 'react-native-elements';
import { ScaledSheet } from 'react-native-size-matters';

import { white } from '../../config/colors';

const styles = ScaledSheet.create({
  container: {
    height: '30@s',
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

const LabeledFormInput = ({
  inputRef,
  containerStyle,
  value,
  errorMessage,
  label,
  flex,
  onFocus,
  onBlur,
  onChange,
}) => {
  const isDark = useSelector((state) => state.core.isDark);

  return (
    <Input
      ref={inputRef}
      value={value}
      errorMessage={errorMessage}
      containerStyle={{ ...styles.container, ...containerStyle, flex: flex || 1 }}
      errorStyle={styles.error}
      inputStyle={{ ...styles.text, color: isDark ? white : null }}
      inputContainerStyle={styles.inputContainer}
      labelStyle={styles.label}
      label={label}
      keyboardType="default"
      textContentType="none"
      placeholder={label}
      onFocus={() => (onFocus ? onFocus() : {})}
      onBlur={() => (onBlur ? onBlur() : {})}
      onChangeText={(val) => (onChange ? onChange(val) : {})}
    />
  );
};

export default LabeledFormInput;
