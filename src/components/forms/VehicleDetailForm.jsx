import React, { createRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { isEmpty, isUppercase } from 'validator';
import { useTranslation } from 'react-i18next';

import ColumnFormRow from '../containers/ColumnFormRow';
import ConfirmButton from '../buttons/ConfirmButton';
import VinInputSmall from '../inputs/VinInputSmall';

import { setAlert, setLoading, setRoute } from '../../store/actions/core';
import { setErrVin, setVin, setVehicleDetails } from '../../store/actions/vehicle';

import decodeVinWithNhtsa from '../../services/vin/decodeVinWithNhtsa';
import MakeInput from '../inputs/MakeInput';
import ModelInput from '../inputs/ModelInput';
import BodyClassInput from '../inputs/BodyClassInput';
import YearInput from '../inputs/YearInput';
import NumberOfDoorsInput from '../inputs/NumberOfDoorsInput';
import Spacer from '../containers/Spacer';
import LabeledFormInput from '../inputs/LabeledFormInput';

const styles = ScaledSheet.create({
  container: { flex: 1 },
  inputContainer: { marginHorizontal: '3@s' },
  header: { marginBottom: '18@s' },
  center: { alignSelf: 'center' },
  button: { marginTop: '30@s' },
});

const VehicleDetailForm = ({ style }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const vinRef = createRef();

  const vin = useSelector((state) => state.vehicle.vin);
  const make = useSelector((state) => state.vehicle.make);
  const model = useSelector((state) => state.vehicle.model);
  const year = useSelector((state) => state.vehicle.year);
  const bodyClass = useSelector((state) => state.vehicle.bodyClass);
  const numOfDoors = useSelector((state) => state.vehicle.numOfDoors);

  const engineInfo = useSelector((state) => state.vehicle.engineInfo);
  const engineCylinders = useSelector((state) => state.vehicle.engineCylinders);
  const engineCC = useSelector((state) => state.vehicle.engineCC);
  const engineL = useSelector((state) => state.vehicle.engineL);

  const transmissionType = useSelector((state) => state.vehicle.transmissionType);
  const transmissionSpeeds = useSelector((state) => state.vehicle.transmissionSpeeds);

  const fuel = useSelector((state) => state.vehicle.fuel);
  const valveTrain = useSelector((state) => state.vehicle.valveTrain);

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

        <Spacer />

        <ColumnFormRow>
          <MakeInput value={make} onBlur={() => null} onChange={(val) => {}} />
          <ModelInput value={model} onBlur={() => null} onChange={(val) => {}} />
        </ColumnFormRow>

        <ColumnFormRow>
          <BodyClassInput value={bodyClass} onBlur={() => null} onChange={(val) => {}} />
          <YearInput value={year} onBlur={() => null} onChange={(val) => {}} />
          <NumberOfDoorsInput value={numOfDoors} onBlur={() => null} onChange={(val) => {}} />
        </ColumnFormRow>

        <Spacer />

        <ColumnFormRow>
          <LabeledFormInput
            value={engineCylinders}
            label={t('engineCylinders')}
            onChange={(val) => {}}
          />
          <LabeledFormInput value={engineCC} label={t('engineCC')} onChange={(val) => {}} />
          <LabeledFormInput value={engineL} label={t('engineL')} onChange={(val) => {}} />
        </ColumnFormRow>

        <ColumnFormRow>
          <LabeledFormInput value={engineInfo} label={t('engineInfo')} onChange={(val) => {}} />
        </ColumnFormRow>

        <Spacer />

        <ColumnFormRow>
          <LabeledFormInput
            value={transmissionType}
            label={t('transmissionType')}
            onChange={(val) => {}}
          />
          <LabeledFormInput
            value={transmissionSpeeds}
            label={t('transmissionSpeeds')}
            onChange={(val) => {}}
          />
        </ColumnFormRow>

        <ColumnFormRow>
          <LabeledFormInput value={fuel} label={t('fuel')} onChange={(val) => {}} />
          <LabeledFormInput value={valveTrain} label={t('valveTrain')} onChange={(val) => {}} />
        </ColumnFormRow>

        <ConfirmButton
          style={styles.button}
          disabled={!vin || errVin}
          onPress={() => resolveVinNumber()}
        />
      </View>
    </View>
  );
};

export default VehicleDetailForm;
