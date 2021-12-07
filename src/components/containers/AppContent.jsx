import React from 'react';
import { View } from 'react-native';

// Container ensuring App Content is in front of Animations
const AppContent = ({ children }) => (
  <View style={{ flex: 1, zIndex: 6, elevation: 6 }}>{children}</View>
);

export default AppContent;
