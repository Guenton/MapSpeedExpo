import React from 'react';
import AppContent from '../containers/AppContent';
import FadeInView from './FadeInView';

const FadeInAppContent = (props) => (
  <AppContent>
    <FadeInView style={{ flex: 1 }}>{props.children}</FadeInView>
  </AppContent>
);

export default FadeInAppContent;
