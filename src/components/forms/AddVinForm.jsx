import React, { createRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { isEmpty, isUppercase } from 'validator';
import { useTranslation } from 'react-i18next';

import VinInput from '../inputs/VinInput';
import LoginButton from '../buttons/LoginButton';

import { setAlert, setLoading } from '../../store/actions/core';
import { setErrVin, setVin } from '../../store/actions/vehicle';
import { fetchVinApiEndpoint, fetchVinApiKey } from '../../firebase/vinApi';

const styles = ScaledSheet.create({
  container: { height: '250@s' },
  inputContainer: { width: '290@s', alignSelf: 'center' },
  input: { marginBottom: '18@s' },
  center: { alignSelf: 'center' },
  loginButton: { marginTop: '30@s' },
});

const AddVinForm = ({ style }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const vinRef = createRef();
  const vin = useSelector((state) => state.vehicle.vin);
  const errVin = useSelector((state) => state.vehicle.errVin);

  const [vinApiEndpoint, setVinApiEndpoint] = useState(null);
  const [vinApiKey, setVinApiKey] = useState(null);

  useEffect(() => {
    return fetchVinApiEndpoint(setVinApiEndpoint);
  }, [vinApiEndpoint]);

  useEffect(() => {
    return fetchVinApiKey(setVinApiKey);
  }, [vinApiKey]);

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
        console.log(vin);

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
        <VinInput
          inputRef={vinRef}
          containerStyle={styles.input}
          value={vin}
          errorMessage={errVin}
          onBlur={() => resolveVinNumber()}
          onChange={(val) => validateAndSetVin(val)}
        />
        <LoginButton style={styles.loginButton} onPress={() => resolveVinNumber()} />
      </View>
    </View>
  );
};

export default AddVinForm;
