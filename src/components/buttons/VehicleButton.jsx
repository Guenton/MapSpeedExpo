import React from 'react';
import { Button, Icon } from 'react-native-elements';
import { ScaledSheet, scale } from 'react-native-size-matters';
import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';
import { primary, white } from '../../config/colors';

const styles = ScaledSheet.create({
  container: {
    alignSelf: 'center',
    borderRadius: '21@s',
    height: '38@s',
    width: '118@s',
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
    height: '38@s',
    width: '118@s',
    borderRadius: '21@s',
    backgroundColor: primary,
  },
  buttonIcon: {
    marginRight: '5@s',
  },
});

const VehicleButton = ({ style, disabled, onPress }) => {
  const { t } = useTranslation();
  const isLoading = useSelector((state) => state.core.isLoading);

  return (
    <Button
      containerStyle={{ ...styles.container, ...style }}
      buttonStyle={styles.button}
      title={t('vehicle')}
      disabled={disabled}
      loading={isLoading}
      onPress={() => onPress()}
      raised
      icon={<Icon name="car" type="font-awesome-5" color={white} style={styles.buttonIcon} />}
    />
  );
};

export default VehicleButton;
