import React from 'react';
import { View, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { ScaledSheet } from 'react-native-size-matters';
import { animated, useSpring } from '@react-spring/native';

import AvatarFab from '../buttons/AvatarFab';
import IconFab from '../buttons/IconFab';
import { setVehicleArrayPosition } from '../../store/actions/core';
import { setMorphing } from '../../store/actions/animation';

const styles = ScaledSheet.create({
  container: {
    height: '175@s',
    width: '340@s',
    marginTop: '210@s',
    marginHorizontal: '5@s',
    flexDirection: 'row',
    position: 'absolute',
  },
  avatar1: { margin: '5@s' },
  avatar2: { margin: '5@s', marginLeft: '10@s', marginTop: '24@s' },
  avatar3: { margin: '5@s', marginTop: '57@s' },
  nextIcon: { margin: '5@s', marginTop: '115@s' },
});

const AnimatedView = animated(View);
const AnimatedPressable = animated(Pressable);

const FadeInVehicleAvatar = () => {
  const dispatch = useDispatch();

  const vehicleArray = useSelector((state) => state.core.vehicleArray);

  const avatarOne = useSpring({
    to: { ...styles.avatar1, opacity: vehicleArray.length > 0 ? 1 : 0 },
    from: { opacity: 0 },
    onStart: () => dispatch(setMorphing(true)),
    onRest: () => dispatch(setMorphing(false)),
  });

  const avatarTwo = useSpring({
    to: { ...styles.avatar2, opacity: vehicleArray.length > 1 ? 1 : 0 },
    from: { opacity: 0 },
    delay: 500,
    onStart: () => dispatch(setMorphing(true)),
    onRest: () => dispatch(setMorphing(false)),
  });

  const avatarThree = useSpring({
    to: { ...styles.avatar3, opacity: vehicleArray.length > 2 ? 1 : 0 },
    from: { opacity: 0 },
    delay: 1000,
    onStart: () => dispatch(setMorphing(true)),
    onRest: () => dispatch(setMorphing(false)),
  });

  const selectVehicleByPosition = (position = 0) => {
    console.log('pressed');
    dispatch(setVehicleArrayPosition(position));
  };

  return (
    <View style={styles.container}>
      <AnimatedView style={avatarOne}>
        <AvatarFab onPress={() => selectVehicleByPosition(0)} />
      </AnimatedView>

      <AnimatedView style={avatarTwo}>
        <AvatarFab onPress={() => selectVehicleByPosition(0)} />
      </AnimatedView>

      <AnimatedView style={avatarThree}>
        <AvatarFab onPress={() => selectVehicleByPosition(2)} />
      </AnimatedView>

      {vehicleArray.length > 3 && (
        <IconFab name="angle-double-right" style={{ ...styles.nextIcon }} />
      )}
    </View>
  );
};

export default FadeInVehicleAvatar;
