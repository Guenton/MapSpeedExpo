/*

---> TL;DR Container ensuring App Content is in front of Animations <---

*/

// Import React Dependencies
import React from 'react';
import { View } from 'react-native';

const AppContent = (props) => (
  <View style={{ flex: 1, zIndex: 6, elevation: 6 }}>{props.children}</View>
);

// Export
export default AppContent;
