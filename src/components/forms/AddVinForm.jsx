import React, { createRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { isEmpty, isUppercase } from 'validator';
import { useTranslation } from 'react-i18next';

import VinInput from '../inputs/VinInput';
import AddButton from '../buttons/AddButton';
import FormHeader from '../labels/FormHeader';

import { setAlert, setLoading } from '../../store/actions/core';
import { setErrVin, setVin } from '../../store/actions/vehicle';
import { decodeVin } from '../../services/vin';

const styles = ScaledSheet.create({
  container: { height: '250@s' },
  inputContainer: { width: '290@s', alignSelf: 'center' },
  header: { marginBottom: '18@s' },
  input: { marginBottom: '18@s' },
  center: { alignSelf: 'center' },
  addButton: { marginTop: '30@s' },
});

const AddVinForm = ({ style }) => {
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

        // Run Vin Decoder
        const vehicleInfo = await decodeVin(vin);

        // Dispatch Result

        dispatch(setLoading(false));

        // Dispatch View Change
      } catch (err) {
        dispatch(setLoading(false));
        dispatch(setAlert(err));
      }
    }
  };

  return (
    <View style={{ ...styles.container, ...style }}>
      <View style={styles.inputContainer}>
        <FormHeader
          style={styles.header}
          label={t('addVinNumber')}
          subLabel={t('addVinNumberDesc')}
        />
        <VinInput
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

export default AddVinForm;
