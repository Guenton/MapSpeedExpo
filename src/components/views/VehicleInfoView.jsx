import React, { createRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { isEmpty, isUppercase } from 'validator';
import { useTranslation } from 'react-i18next';

import VinInput from '../inputs/VinInput';
import AddButton from '../buttons/AddButton';
import FormHeader from '../labels/FormHeader';

import { setAlert, setLoading, setRoute } from '../../store/actions/core';
import { setErrVin, setVin, setVehicleDetails } from '../../store/actions/vehicle';

import decodeVinWithNhtsa from '../../services/vin/decodeVinWithNhtsa';

const styles = ScaledSheet.create({
  container: { height: '250@s' },
  inputContainer: { width: '290@s', alignSelf: 'center' },
  header: { marginBottom: '18@s' },
  input: { marginBottom: '18@s' },
  center: { alignSelf: 'center' },
  addButton: { marginTop: '30@s' },
});

const VehicleInfoView = ({ style }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const vehicleArray = useSelector((state) => state.core.vehicleArray);
  const vehicleArrayPosition = useSelector((state) => state.core.vehicleArrayPosition);
  const vin = useSelector((state) => state.vehicle.vin);

  useEffect(() => {
    dispatch(setVehicleDetails(vehicleArray[vehicleArrayPosition]));
  }, [vehicleArrayPosition]);

  return (
    <View style={{ ...styles.container, ...style }}>
      <View style={styles.inputContainer}>
        <AddButton
          style={styles.addButton}
          disabled={!vin || errVin}
          onPress={() => resolveVinNumber()}
        />
      </View>
    </View>
  );
};

export default VehicleInfoView;
