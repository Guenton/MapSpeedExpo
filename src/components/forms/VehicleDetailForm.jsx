import React, { createRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { isEmpty, isUppercase } from 'validator';
import { useTranslation } from 'react-i18next';

import ColumnFormRow from '../containers/ColumnFormRow';
import Spacer from '../containers/Spacer';
import ConfirmButton from '../buttons/ConfirmButton';
import VinInputSmall from '../inputs/VinInputSmall';
import MakeInput from '../inputs/MakeInput';
import ModelInput from '../inputs/ModelInput';
import BodyClassInput from '../inputs/BodyClassInput';
import YearInput from '../inputs/YearInput';
import NumberOfDoorsInput from '../inputs/NumberOfDoorsInput';
import LabeledFormInput from '../inputs/LabeledFormInput';

import { storeVehicleByVin } from '../../firebase/vehicle';
import decodeVinWithNhtsa from '../../services/vin/decodeVinWithNhtsa';

import { setAlert, setLoading, setRoute } from '../../store/actions/core';
import {
  setErrVin,
  setVin,
  setVehicleDetails,
  setErrMake,
  setErrModel,
  setErrYear,
  setMake,
  setModel,
  setYear,
  setBodyClass,
  setNumOfDoors,
  setEngineCylinders,
  setEngineCC,
  setEngineL,
  setEngineInfo,
  setTransmissionType,
  setTransmissionSpeeds,
  setFuel,
  setValveTrain,
} from '../../store/actions/vehicle';

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
  const makeRef = createRef();
  const modelRef = createRef();
  const yearRef = createRef();
  const bodyClassRef = createRef();
  const numOfDoorsRef = createRef();
  const engineCylindersRef = createRef();
  const engineCCRef = createRef();
  const engineLRef = createRef();
  const engineInfoRef = createRef();
  const transmissionTypeRef = createRef();
  const transmissionSpeedsRef = createRef();
  const fuelRef = createRef();
  const valveTrainRef = createRef();

  const vin = useSelector((state) => state.vehicle.vin);
  const make = useSelector((state) => state.vehicle.make);
  const model = useSelector((state) => state.vehicle.model);
  const year = useSelector((state) => state.vehicle.year);
  const bodyClass = useSelector((state) => state.vehicle.bodyClass);
  const numOfDoors = useSelector((state) => state.vehicle.numOfDoors);
  const engineCylinders = useSelector((state) => state.vehicle.engineCylinders);
  const engineCC = useSelector((state) => state.vehicle.engineCC);
  const engineL = useSelector((state) => state.vehicle.engineL);
  const engineInfo = useSelector((state) => state.vehicle.engineInfo);
  const transmissionType = useSelector((state) => state.vehicle.transmissionType);
  const transmissionSpeeds = useSelector((state) => state.vehicle.transmissionSpeeds);
  const fuel = useSelector((state) => state.vehicle.fuel);
  const valveTrain = useSelector((state) => state.vehicle.valveTrain);

  const errVin = useSelector((state) => state.vehicle.errVin);
  const errMake = useSelector((state) => state.vehicle.errMake);
  const errModel = useSelector((state) => state.vehicle.errModel);
  const errYear = useSelector((state) => state.vehicle.errYear);

  const vehicle = useSelector((state) => state.vehicle);

  const shakeOnError = () => {
    if (errVin) vinRef.current.shake();
    if (errMake) makeRef.current.shake();
    if (errModel) modelRef.current.shake();
    if (errYear) yearRef.current.shake();
    if (!vin) return vinRef.current.focus();
    if (!make) return makeRef.current.focus();
    if (!model) return modelRef.current.focus();
    if (!year) return yearRef.current.focus();
  };

  const validateAndSetVin = (val) => {
    if (isEmpty(val)) dispatch(setErrVin(t('err.notFilled')));
    else if (!isUppercase(val)) dispatch(setErrVin(t('err.notUpperCase')));
    else dispatch(setErrVin());
    dispatch(setVin(val));
  };

  const validateAndSetMake = (val) => {
    if (isEmpty(val)) dispatch(setErrMake(t('err.notFilled')));
    else dispatch(setErrMake());
    dispatch(setMake(val));
  };

  const validateAndSetModel = (val) => {
    if (isEmpty(val)) dispatch(setErrModel(t('err.notFilled')));
    else dispatch(setErrModel());
    dispatch(setModel(val));
  };

  const validateAndSetYear = (val) => {
    if (isEmpty(val)) dispatch(setErrYear(t('err.notFilled')));
    else if (val.length !== 4) dispatch(setErrYear(t('err.wrongYearLength')));
    else dispatch(setErrYear());
    dispatch(setYear(val));
  };

  const validateRequiredFields = () => {
    validateAndSetVin(vin);
    validateAndSetMake(make);
    validateAndSetModel(model);
    validateAndSetYear(year);
    if (errVin) return shakeOnError();
    if (errMake) return shakeOnError();
    if (errModel) return shakeOnError();
    if (errYear) return shakeOnError();
  };

  const resolveVinNumber = () => {
    validateAndSetVin(vin);
    if (errVin) return shakeOnError();

    dispatch(setLoading());
    decodeVinWithNhtsa(vin)
      .then((vehicleInfo) => dispatch(setVehicleDetails(vehicleInfo)))
      .catch((err) => dispatch(setAlert(err)))
      .finally(() => dispatch(setLoading(false)));
  };

  const confirmVehicleDetails = () => {
    validateRequiredFields();
    if (errVin || errMake || errModel || errYear) return;

    dispatch(setLoading());
    storeVehicleByVin(vin, vehicle)
      .then(() => dispatch(setRoute('main')))
      .catch((err) => dispatch(setAlert(err)))
      .finally(() => dispatch(setLoading(false)));
  };

  return (
    <View style={{ ...styles.container, ...style }}>
      <View style={styles.inputContainer}>
        <VinInputSmall
          inputRef={vinRef}
          containerStyle={styles.input}
          value={vin}
          errorMessage={errVin}
          onSubmit={() => resolveVinNumber()}
          onChange={(val) => validateAndSetVin(val)}
        />

        <Spacer />

        <ColumnFormRow>
          <MakeInput
            inputRef={makeRef}
            value={make}
            errorMessage={errMake}
            onSubmit={() => modelRef.current.focus()}
            onChange={(val) => validateAndSetMake(val)}
          />
          <ModelInput
            inputRef={modelRef}
            value={model}
            errorMessage={errModel}
            onSubmit={() => yearRef.current.focus()}
            onChange={(val) => validateAndSetModel(val)}
          />
        </ColumnFormRow>

        <ColumnFormRow>
          <YearInput
            inputRef={yearRef}
            value={year}
            errorMessage={errYear}
            onSubmit={() => bodyClassRef.current.focus()}
            onChange={(val) => validateAndSetYear(val)}
          />
          <BodyClassInput
            inputRef={bodyClassRef}
            value={bodyClass}
            onSubmit={() => numOfDoorsRef.current.focus()}
            onChange={(val) => dispatch(setBodyClass(val))}
          />
          <NumberOfDoorsInput
            inputRef={numOfDoorsRef}
            value={numOfDoors}
            onSubmit={() => engineCylindersRef.current.focus()}
            onChange={(val) => dispatch(setNumOfDoors(val))}
          />
        </ColumnFormRow>

        <Spacer />

        <ColumnFormRow>
          <LabeledFormInput
            inputRef={engineCylindersRef}
            value={engineCylinders}
            label={t('engineCylinders')}
            onSubmit={() => engineCCRef.current.focus()}
            onChange={(val) => dispatch(setEngineCylinders(val))}
          />
          <LabeledFormInput
            inputRef={engineCCRef}
            value={engineCC}
            label={t('engineCC')}
            onSubmit={() => engineLRef.current.focus()}
            onChange={(val) => dispatch(setEngineCC(val))}
          />
          <LabeledFormInput
            inputRef={engineLRef}
            value={engineL}
            label={t('engineL')}
            onSubmit={() => engineInfoRef.current.focus()}
            onChange={(val) => dispatch(setEngineL(val))}
          />
        </ColumnFormRow>

        <ColumnFormRow>
          <LabeledFormInput
            inputRef={engineInfoRef}
            value={engineInfo}
            label={t('engineInfo')}
            onSubmit={() => transmissionTypeRef.current.focus()}
            onChange={(val) => dispatch(setEngineInfo(val))}
          />
        </ColumnFormRow>

        <Spacer />

        <ColumnFormRow>
          <LabeledFormInput
            inputRef={transmissionTypeRef}
            value={transmissionType}
            label={t('transmissionType')}
            onSubmit={() => transmissionSpeedsRef.current.focus()}
            onChange={(val) => dispatch(setTransmissionType(val))}
          />
          <LabeledFormInput
            inputRef={transmissionSpeedsRef}
            value={transmissionSpeeds}
            label={t('transmissionSpeeds')}
            onSubmit={() => fuelRef.current.focus()}
            onChange={(val) => dispatch(setTransmissionSpeeds(val))}
          />
        </ColumnFormRow>

        <ColumnFormRow>
          <LabeledFormInput
            inputRef={fuelRef}
            value={fuel}
            label={t('fuel')}
            onSubmit={() => valveTrainRef.current.focus()}
            onChange={(val) => dispatch(setFuel(val))}
          />
          <LabeledFormInput
            inputRef={valveTrainRef}
            value={valveTrain}
            label={t('valveTrain')}
            onSubmit={() => validateRequiredFields()}
            onChange={(val) => dispatch(setValveTrain(val))}
          />
        </ColumnFormRow>

        <ConfirmButton
          style={styles.button}
          disabled={!vin || !make || !model || !year || errVin}
          onPress={() => confirmVehicleDetails()}
        />

        <Spacer />
      </View>
    </View>
  );
};

export default VehicleDetailForm;
