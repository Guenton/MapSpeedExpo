/*

The AppBackground.js Exports a React-Native Functional Component
- Component is connected to Redux
- Component has access to only the Redux states configured under mapStateToProps
- Component has access to only the Redux action dispatchers configured under mapDispatchToProps

- AppBackground is the React-Native component Background of the Application
- A picture is loaded in the background
- A light primary opacity color is applied to it

---> TL;DR React Native Component for Application Background <---

*/

// Import React Dependencies
import React from 'react';
import { ImageBackground, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux';

// Import Image from Assets
const skylineBG = require('../../assets/images/skylineBG.jpg');
const hdBMW = require('../../assets/images/hdBMW.jpg');

const AppBackground = (props) => (
  <ImageBackground
    style={{ flex: 1 }}
    source={props.skyline ? skylineBG : hdBMW}
    resizeMode="cover">
    {/* Status Bar */}
    <StatusBar animated translucent barStyle={props.isDark ? 'light-content' : 'dark-content'} />

    {/* View Containing Children Components */}
    <SafeAreaView style={{ flex: 1, backgroundColor: props.opacity }}>
      {props.children}
    </SafeAreaView>
  </ImageBackground>
);

// Map Redux states to "props" passed to functional component
const mapStateToProps = (state) => ({
  opacity: state.color.primaryOpacity,
  isDark: state.color.isDark,
});

// Connect Functional Component to Redux and Export
export default connect(mapStateToProps)(AppBackground);
