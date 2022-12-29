import React from 'react';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { ScaledSheet } from 'react-native-size-matters';
import { useTranslation } from 'react-i18next';

import FlatButton from '../buttons/FlatButton';

import { setAlert, setRoute } from '../../store/actions/core';
import signOutAsync from '../../services/auth/signOutAsync';

const styles = ScaledSheet.create({
  container: {
    height: '35@s',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftContainer: { margin: '3@s' },
  titleContainer: {},
  rightContainer: { margin: '3@s' },
});

const TopBar = ({ style }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const signOut = () => {
    signOutAsync()
      .then(() => dispatch(setRoute('start')))
      .catch((err) => dispatch(setAlert(err)));
  };

  return (
    <View style={{ ...styles.container, ...style }}>
      <View style={styles.leftContainer}>
        <FlatButton name="bars" onPress={() => signOut()} />
      </View>

      <View style={styles.titleContainer}>
        <Text>{t('myVehicles')}</Text>
      </View>

      <View style={styles.rightContainer}></View>
    </View>
  );
};

export default TopBar;
