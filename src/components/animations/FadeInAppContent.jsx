import React from 'react';

import AppContent from '../containers/AppContent';
import FadeInView from './FadeInView';

const FadeInAppContent = ({ children }) => {
  return (
    <AppContent>
      <FadeInView style={{ flex: 1 }}>{children}</FadeInView>
    </AppContent>
  );
};

export default FadeInAppContent;
