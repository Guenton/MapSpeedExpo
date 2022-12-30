import React from 'react';
import { View } from 'react-native';

import Header from './Header';
import SubHeader from './SubHeader';

const FormHeader = ({ style, label, subLabel }) => {
  return (
    <View style={style}>
      <Header label={label} />
      {subLabel && <SubHeader label={subLabel} />}
    </View>
  );
};

export default FormHeader;
