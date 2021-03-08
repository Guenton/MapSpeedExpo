// Import React Native Dependencies
import React from 'react';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {},
  text: {},
});

const TitleHeading = (props) => {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={[styles.text, { color: props.primaryColor }, props.textStyle]}>
        {props.text}
      </Text>
    </View>
  );
};

// Map Redux states to "props" passed to functional component
const mapStateToProps = (state) => ({ primaryColor: state.color.primary });

// Connect Functional Component to Redux and Export
export default connect(mapStateToProps)(TitleHeading);
