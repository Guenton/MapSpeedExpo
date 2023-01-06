import React, { createRef } from 'react';
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
import ScaleInView from '../animations/ScaleInView';

const styles = ScaledSheet.create({
  container: { flex: 1 },
  inputContainer: { width: '250@s' },
  header: { marginBottom: '18@s' },
  input: { marginBottom: '18@s' },
  addButton: { marginVertical: '30@s' },
});

const AddVinForm = ({ style }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const vinRef = createRef();
  const vin = useSelector((state) => state.vehicle.vin);
  const errVin = useSelector((state) => state.vehicle.errVin);

  const shakeOnError = () => {
    if (errVin) vinRef.current.shake();
    if (!vin) return vinRef.current.focus();
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
    <ScaleInView style={{ ...styles.container, ...style }}>
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
          onSubmit={() => resolveVinNumber()}
          onChange={(val) => validateAndSetVin(val)}
        />
      </View>
      <AddButton
        style={styles.addButton}
        disabled={!vin || errVin}
        onPress={() => resolveVinNumber()}
      />
    </ScaleInView>
  );
};

export default AddVinForm;
