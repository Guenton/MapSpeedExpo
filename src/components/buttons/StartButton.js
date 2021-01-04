// Import React Native Dependencies
import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';

const StartButton = (props) => {
  // Return Customized Elements Button Component
  return <Button title={props.startLang} type="outline" raised />;
};

// Map Redux states to "props" passed to functional component
const mapStateToProps = (state) => ({ startLang: state.lang.start });

// Connect Functional Component to Redux and Export
export default connect(mapStateToProps)(StartButton);
