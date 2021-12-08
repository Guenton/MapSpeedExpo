import React from 'react';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

import SelectLoginTypeButton from '../buttons/SelectLoginTypeButton';

const styles = ScaledSheet.create({
  container: { alignSelf: 'center' },
  selector: { marginVertical: '9@s' },
});

const SelectLoginTypeForm = ({ onSubmit }) => (
  <View style={styles.container}>
    <SelectLoginTypeButton style={styles.selector} type="user" onSubmit={() => onSubmit('user')} />

    <SelectLoginTypeButton
      style={styles.selector}
      type="google"
      onSubmit={() => onSubmit('google')}
    />

    <SelectLoginTypeButton
      style={styles.selector}
      type="facebook"
      onSubmit={() => onSubmit('facebook')}
    />
  </View>
);

export default SelectLoginTypeForm;
