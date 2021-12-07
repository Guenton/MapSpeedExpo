import React from 'react';
import { ScaledSheet, scale } from 'react-native-size-matters';

import FadeInAppContent from '../animations/FadeInAppContent';
import IconFab from '../buttons/IconFab';
import MapLogo from '../images/MapLogo';

const styles = ScaledSheet.create({ logo: { marginTop: '50@s' }, start: { alignSelf: 'center' } });

const StartScreenHeaderView = ({ onPressStart }) => (
  <FadeInAppContent>
    <MapLogo style={styles.logo} />

    <IconFab
      style={styles.start}
      name="power-off"
      size={scale(60)}
      onPress={() => (onPressStart ? onPressStart() : null)}
      reverse
    />
  </FadeInAppContent>
);

export default StartScreenHeaderView;
