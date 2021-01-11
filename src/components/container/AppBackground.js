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
import { ImageBackground, View } from 'react-native';
import { connect } from 'react-redux';

// Import Image from Assets
const skylineBG = require('../../assets/images/skylineBG.jpg');

const AppBackground = (props) => (
  <ImageBackground style={{ flex: 1 }} source={skylineBG} resizeMode="cover">
    {/* View Containing Children Components */}
    <View style={{ flex: 1, backgroundColor: props.opacity }}>{props.children}</View>
  </ImageBackground>
);

// Map Redux states to "props" passed to functional component
const mapStateToProps = (state) => ({ opacity: state.color.primaryOpacity });

// Connect Functional Component to Redux and Export
export default connect(mapStateToProps)(AppBackground);
