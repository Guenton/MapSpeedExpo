import React from 'react';
import { Button } from 'react-native-elements';
import { ScaledSheet } from 'react-native-size-matters';
import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';

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
  },
});

const SignupButton = ({ disabled, reverse, loading, onPress }) => {
  const { t } = useTranslation();
  const primary = useSelector((state) => state.color.primary);

  return (
    <Button
      containerStyle={{ ...styles.container }}
      buttonStyle={{ ...styles.button, backgroundColor: primary }}
      title={t('signup')}
      disabled={disabled}
      reverse={reverse}
      loading={loading}
      onPress={() => onPress()}
      raised
    />
  );
};

export default SignupButton;
