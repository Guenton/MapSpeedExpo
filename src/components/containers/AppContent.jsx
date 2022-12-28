import React from 'react';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import isIOS from '../../services/core/isIOS';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    zIndex: 6,
    elevation: 6,
    marginVertical: isIOS ? '-40@s' : null,
  },
});

// Container ensuring App Content is in front of Animations
const AppContent = ({ children }) => <View style={styles.container}>{children}</View>;

export default AppContent;
