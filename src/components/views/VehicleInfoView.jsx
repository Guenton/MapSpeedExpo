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
import BoldText from '../labels/BoldText';
import { ScrollView } from 'react-native';
import VehicleLabelRow from '../labels/VehicleLabelRow';
import VehicleTitleBox from '../labels/VehicleTitleBox';
import VehicleButton from '../buttons/VehicleButton';
import ServiceButton from '../buttons/ServiceButton';
import IconFab from '../buttons/IconFab';

const styles = ScaledSheet.create({
  container: { height: '360@s', width: '325@s', alignSelf: 'center' },
  header: { marginBottom: '18@s' },
  input: { marginBottom: '18@s' },
  center: { alignSelf: 'center' },
  buttonContainer: { marginVertical: '30@s', flexDirection: 'row', justifyContent: 'space-around' },
});

const VehicleInfoView = ({ style }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const vehicleArray = useSelector((state) => state.core.vehicleArray);
  const vehicleArrayPosition = useSelector((state) => state.core.vehicleArrayPosition);
  const vin = useSelector((state) => state.vehicle.vin);
  const make = useSelector((state) => state.vehicle.make);
  const model = useSelector((state) => state.vehicle.model);
  const year = useSelector((state) => state.vehicle.year);

  useEffect(() => {
    dispatch(setVehicleDetails(vehicleArray[vehicleArrayPosition]));
  }, [vehicleArrayPosition]);

  return (
    <ScrollView style={{ ...styles.container, ...style }}>
      <VehicleTitleBox make={make} model={model} year={year} />
      <VehicleLabelRow label={t('vinNumber')} text={vin} />
      <VehicleLabelRow label="Previous Service" text="Not Available" />
      <VehicleLabelRow label="Suggested Next Service" text="Not Available" />
      <VehicleLabelRow label="Next Appointment" text="Not Booked" />
      <View style={styles.buttonContainer}>
        <VehicleButton disabled={!vin} onPress={() => null} />
        <ServiceButton disabled={!vin} onPress={() => null} />
      </View>
    </ScrollView>
  );
};

export default VehicleInfoView;
