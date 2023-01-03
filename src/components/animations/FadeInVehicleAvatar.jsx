import React from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { ScaledSheet } from 'react-native-size-matters';
import { animated, useSpring, useSpringRef, useChain } from '@react-spring/native';

import AvatarFab from '../buttons/AvatarFab';
import IconFab from '../buttons/IconFab';
import { setVehicleArrayPosition } from '../../store/actions/core';

const styles = ScaledSheet.create({
  container: {
    height: '175@s',
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

const FadeInVehicleAvatar = () => {
  const dispatch = useDispatch();
  const avatarOneSpring = useSpringRef();
  const avatarTwoSpring = useSpringRef();
  const avatarThreeSpring = useSpringRef();

  const vehicleArray = useSelector((state) => state.core.vehicleArray);
  const transitioning = useSelector((state) => state.animation.transitioning);

  const avatarOne = useSpring({
    ref: avatarOneSpring,
    to: { ...styles.avatar1, opacity: transitioning ? 0 : 1 },
    from: { opacity: transitioning ? 1 : 0 },
  });

  const avatarTwo = useSpring({
    ref: avatarTwoSpring,
    to: { ...styles.avatar2, opacity: transitioning ? 0 : 1 },
    from: { opacity: transitioning ? 1 : 0 },
  });

  const avatarThree = useSpring({
    ref: avatarThreeSpring,
    to: { ...styles.avatar3, opacity: transitioning ? 0 : 1 },
    from: { opacity: transitioning ? 1 : 0 },
  });

  useChain([avatarOneSpring, avatarTwoSpring, avatarThreeSpring]);

  const selectVehicleByPosition = (position = 0) => {
    dispatch(setVehicleArrayPosition(position));
  };

  return (
    <View style={styles.container}>
      {vehicleArray.length > 0 && (
        <AnimatedView style={avatarOne}>
          <AvatarFab onPress={selectVehicleByPosition(0)} />
        </AnimatedView>
      )}

      {vehicleArray.length > 1 && (
        <AnimatedView style={avatarTwo}>
          <AvatarFab onPress={selectVehicleByPosition(1)} />
        </AnimatedView>
      )}

      {vehicleArray.length > 2 && (
        <AnimatedView style={avatarThree}>
          <AvatarFab onPress={selectVehicleByPosition(2)} />
        </AnimatedView>
      )}

      {vehicleArray.length > 3 && (
        <IconFab name="angle-double-right" style={{ ...styles.nextIcon }} />
      )}
    </View>
  );
};

export default FadeInVehicleAvatar;
