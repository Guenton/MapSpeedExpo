import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

import SelectLoginTypeButton from '../buttons/SelectLoginTypeButton';

import { setLoginType } from '../../store/actions/login';

const styles = ScaledSheet.create({
  container: { alignSelf: 'center' },
  selector: { marginVertical: '8@s' },
});

const SelectLoginTypeForm = ({ setLoginType }) => {
  return (
    <View style={styles.container}>
      <SelectLoginTypeButton
        style={styles.selector}
        type="user"
        onSubmit={() => setLoginType('user')}
      />
      <SelectLoginTypeButton
        style={styles.selector}
        type="google"
        onSubmit={() => setLoginType('google')}
      />
      <SelectLoginTypeButton
        style={styles.selector}
        type="facebook"
        onSubmit={() => setLoginType('facebook')}
      />
    </View>
  );
};

const mapDispatchToProps = { setLoginType };

export default connect(null, mapDispatchToProps)(SelectLoginTypeForm);
