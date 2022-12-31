import React, { createRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { isEmpty, isUppercase } from 'validator';
import { useTranslation } from 'react-i18next';

import VinInputSmall from '../inputs/VinInputSmall';
import AddButton from '../buttons/AddButton';
import FormHeader from '../labels/FormHeader';

import { setAlert, setLoading, setRoute } from '../../store/actions/core';
import { setErrVin, setVin, setVehicleDetails } from '../../store/actions/vehicle';

import decodeVinWithNhtsa from '../../services/vin/decodeVinWithNhtsa';

const styles = ScaledSheet.create({
  container: { flex: 1 },
  inputContainer: { marginLeft: '3@s' },
  header: { marginBottom: '18@s' },
  input: { marginBottom: '18@s' },
  center: { alignSelf: 'center' },
  addButton: { marginTop: '30@s' },
});

const VehicleDetailForm = ({ style }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const vinRef = createRef();
  const vin = useSelector((state) => state.vehicle.vin);
  const errVin = useSelector((state) => state.vehicle.errVin);

  const shakeOnError = () => {
    if (errVin) vinRef.current.shake();
    if (!vinRef) return vinRef.current.focus();
  };

  const validateAndSetVin = (val) => {
    if (isEmpty(val)) dispatch(setErrVin(t('err.notFilled')));
    else if (!isUppercase(val)) dispatch(setErrVin(t('err.notUpperCase')));
    else dispatch(setErrVin());

    dispatch(setVin(val));
  };

  const resolveVinNumber = async () => {
    validateAndSetVin(vin);

    if (errVin) return shakeOnError();

    if (vin) {
      try {
        dispatch(setLoading());

        const vehicleInfo = await decodeVinWithNhtsa(vin);

        dispatch(setVehicleDetails(vehicleInfo));
        dispatch(setLoading(false));

        dispatch(setRoute('vehicle-detail'));
      } catch (err) {
        dispatch(setLoading(false));
        dispatch(setAlert(err));
      }
    }
  };

  return (
    <View style={{ ...styles.container, ...style }}>
      <View style={styles.inputContainer}>
        <VinInputSmall
          inputRef={vinRef}
          containerStyle={styles.input}
          value={vin}
          errorMessage={errVin}
          onBlur={() => resolveVinNumber()}
          onChange={(val) => validateAndSetVin(val)}
        />
        <AddButton
          style={styles.addButton}
          disabled={!vin || errVin}
          onPress={() => resolveVinNumber()}
        />
      </View>
    </View>
  );
};

export default VehicleDetailForm;
