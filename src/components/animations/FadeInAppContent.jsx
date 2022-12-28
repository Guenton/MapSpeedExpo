import React from 'react';
import { View } from 'react-native';

import AppContent from '../containers/AppContent';
import FadeInView from './FadeInView';

<<<<<<< HEAD
const FadeInAppContent = ({ children }) => (
  <View style={{ flex: 1, zIndex: 6, elevation: 6 }}>
    <FadeInView style={{ flex: 1 }}>{children}</FadeInView>
  </View>
);
=======
const FadeInAppContent = ({ children }) => {
  return (
    <AppContent>
      <FadeInView style={{ flex: 1 }}>{children}</FadeInView>
    </AppContent>
  );
};
>>>>>>> 55284fcba7ae25cb0b1076788b0699d70695816a

export default FadeInAppContent;
