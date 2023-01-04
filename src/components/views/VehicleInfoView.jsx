import React, { createRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, ScrollView } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useTranslation } from 'react-i18next';

import VehicleLabelRow from '../labels/VehicleLabelRow';
import VehicleTitleBox from '../labels/VehicleTitleBox';
import VehicleButton from '../buttons/VehicleButton';
import ServiceButton from '../buttons/ServiceButton';

import { setRoute } from '../../store/actions/core';
import { setVehicleDetails } from '../../store/actions/vehicle';

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
      <VehicleLabelRow label={t('previousService')} text={t('notAvailable')} />
      <VehicleLabelRow label={t('suggestedService')} text={t('notAvailable')} />
      <VehicleLabelRow label={t('nextAppointment')} text={t('notBooked')} />
      <View style={styles.buttonContainer}>
        <VehicleButton disabled={!vin} onPress={() => dispatch(setRoute('vehicle-detail'))} />
        <ServiceButton disabled={!vin} onPress={() => null} />
      </View>
    </ScrollView>
  );
};

export default VehicleInfoView;
