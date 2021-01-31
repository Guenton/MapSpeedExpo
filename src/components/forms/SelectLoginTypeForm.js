/*

---> TL;DR Form for Selecting Google, Facebook or Username/Password Login <---

*/

// Import React Native Dependencies
import React from 'react';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

// Import Components
import SelectLoginTypeButton from '../buttons/SelectLoginTypeButton';

// Styles
const styles = ScaledSheet.create({
  container: { alignSelf: 'center' },
  selector: { marginVertical: '8@s' },
});

const SelectLoginTypeForm = (props) => {
  return (
    <View style={[styles.container, props.style]}>
      <SelectLoginTypeButton style={styles.selector} type="user" onSubmit={() => {}} />
      <SelectLoginTypeButton style={styles.selector} type="google" onSubmit={() => {}} />
      <SelectLoginTypeButton style={styles.selector} type="facebook" onSubmit={() => {}} />
    </View>
  );
};

export default SelectLoginTypeForm;
