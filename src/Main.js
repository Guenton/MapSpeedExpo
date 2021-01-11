/*

---> TL;DR Screen Router <---

*/

// Import React Dependencies
import React from 'react';
import { SafeAreaView } from 'react-native';

// Import Components
import StartScreen from './screens/StartScreen';

const Main = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <StartScreen />
  </SafeAreaView>
);

export default Main;
