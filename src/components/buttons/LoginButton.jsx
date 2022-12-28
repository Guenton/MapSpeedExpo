import React from 'react';
import { Button } from 'react-native-elements';
import { ScaledSheet } from 'react-native-size-matters';
import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';
import { primary } from '../../config/colors';

const styles = ScaledSheet.create({
  container: {
    alignSelf: 'center',
    borderRadius: '21@s',
    height: '36@s',
    width: '95@s',
    // Shadows
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    zIndex: 9,
  },
  button: {
    height: '36@s',
    width: '95@s',
    borderRadius: '21@s',
    backgroundColor: primary,
  },
});

const LoginButton = ({ style, disabled, onPress }) => {
  const { t } = useTranslation();
  const isLoading = useSelector((state) => state.core.isLoading);

  return (
    <Button
      containerStyle={{ ...styles.container, ...style }}
      buttonStyle={styles.button}
      title={t('login')}
      disabled={disabled}
      loading={isLoading}
      onPress={() => onPress()}
      raised
    />
  );
};

export default LoginButton;
