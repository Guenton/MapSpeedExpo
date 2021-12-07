import React from 'react';
import { Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { ScaledSheet } from 'react-native-size-matters';
import { Button } from 'react-native-elements';

const width = Dimensions.get('window').width * 0.3;
const styles = ScaledSheet.create({
  container: { width, alignSelf: 'center' },
  title: { fontSize: '14@s' },
});

const StartButton = (props) => {
  // Set backgroundColor depending on Redux isDark state
  const backgroundColor = props.color.isDark ? props.color.grey : props.color.white;

  // Return Customized Elements Button Component
  return (
    <Button
      onPress={() => props.onPress()}
      title={props.startLang}
      containerStyle={[styles.container, props.style]}
      buttonStyle={{ backgroundColor }}
      titleStyle={[styles.title, { color: props.color.primary }]}
      raised={props.color.isDark ? false : true}
    />
  );
};

// Map Redux states to "props" passed to functional component
const mapStateToProps = (state) => ({ color: state.color });

// Connect Functional Component to Redux and Export
export default connect(mapStateToProps)(StartButton);
