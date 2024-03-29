import React from 'react';
import { Text, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

import { grey } from '../../config/colors';

const styles = ScaledSheet.create({
  text: {
    fontSize: '12@s',
    color: grey,
  },
});

const SubHeader = ({ style, label }) => {
  return (
    <View style={style}>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
};

export default SubHeader;
