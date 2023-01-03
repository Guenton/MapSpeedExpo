import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { ScaledSheet } from 'react-native-size-matters';
import { white, black } from '../../config/colors';

const styles = ScaledSheet.create({
  container: { marginBottom: '30@s' },
  makeContainer: { margin: '5@s' },
  modelContainer: { marginLeft: '20@s' },
  makeLabel: {
    fontSize: '24@s',
    fontWeight: 'bold',
  },
  modelLabel: {
    fontSize: '18@s',
  },
});

const VehicleTitleBox = ({ style, make, model, year }) => {
  const isDark = useSelector((state) => state.core.isDark);

  return (
    <View style={{ ...styles.container, ...style }}>
      <View style={styles.makeContainer}>
        <Text style={{ ...styles.makeLabel, color: isDark ? white : black }}>{make}</Text>
      </View>
      <View style={styles.modelContainer}>
        <Text style={{ ...styles.modelLabel, color: isDark ? white : black }}>
          {`${year} - ${model}`}
        </Text>
      </View>
    </View>
  );
};

export default VehicleTitleBox;
