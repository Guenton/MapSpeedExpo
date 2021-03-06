/*

---> TL;DR FadeIn Animation Inside of an Footer Container <---

*/

// Import React Native Dependencies
import React from 'react';
import Footer from '../containers/Footer';
import FadeInView from './FadeInView';

const FadeInFooter = (props) => (
  <Footer>
    <FadeInView style={{ flex: 1 }}>{props.children}</FadeInView>
  </Footer>
);

export default FadeInFooter;
