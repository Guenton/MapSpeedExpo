/*

The Main.js Exports a React-Native Functional Component
- Component is connected not to Redux

- Main is the Main entry point of the visual part of this Application
- All Screen Components will be loaded directly into this component

---> TL;DR React Native Component for Application Logo <---

*/

// Import React Dependencies
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SkylineBG from './components/images/SkylineBG';
import { ScaledSheet } from 'react-native-size-matters';

// Import Components

const Main = () => (
    <SkylineBG /> 
  // <View style={styles.container}>
  //   <Text>MapSpeed!</Text>
  //   <StatusBar style="auto" />
  // </View>
);

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Main;
