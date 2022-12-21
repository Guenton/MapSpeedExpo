import React from 'react';

import Footer from '../containers/Footer';
import FadeInView from './FadeInView';

const FadeInFooter = ({ children }) => {
  return (
    <Footer>
      <FadeInView style={{ flex: 1 }}>{children}</FadeInView>
    </Footer>
  );
};

export default FadeInFooter;
