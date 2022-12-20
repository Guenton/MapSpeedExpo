import React from 'react';
import { View } from 'react-native';

import AppContent from '../containers/AppContent';
import FadeInView from './FadeInView';

const FadeInAppContent = ({ children }) => (
  <View style={{ flex: 1, zIndex: 6, elevation: 6 }}>
    <FadeInView style={{ flex: 1 }}>{children}</FadeInView>
  </View>
);

export default FadeInAppContent;
