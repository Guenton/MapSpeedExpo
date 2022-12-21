import React from 'react';
import { Pressable } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useTranslation } from 'react-i18next';

import SubHeader from '../labels/SubHeader';
import BoldText from '../labels/BoldText';

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    paddingHorizontal: '10@s',
  },
  spacing: {
    marginRight: '5@s',
  },
});

const ForgotPasswordButton = ({ style, onPress }) => {
  const { t } = useTranslation();

  return (
    <Pressable style={[styles.container, style]} onPress={() => onPress()}>
      <SubHeader label={t('forgotPassword')} style={styles.spacing} />
      <BoldText label={t('reset')} />
    </Pressable>
  );
};

export default ForgotPasswordButton;
