/*

The Main.js Exports a React-Native Functional Component
- Component is not connected to Redux

- Main is the Main entry point of the visual part of this Application
- All Screen Components will be loaded directly into this component

---> TL;DR React Native Component for Application Logo <---

*/

// Import React Dependencies
import React from 'react';
import { SafeAreaView } from 'react-native';

// Import Components
import AppBackground from './components/container/AppBackground';

const Main = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <AppBackground></AppBackground>
  </SafeAreaView>
);

export default Main;
