import React from 'react';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    height: '50@s',
    marginVertical: '5@s',
    flexDirection: 'row',
  },
});

const ColumnFormRow = ({ children }) => <View style={styles.container}>{children}</View>;

export default ColumnFormRow;
