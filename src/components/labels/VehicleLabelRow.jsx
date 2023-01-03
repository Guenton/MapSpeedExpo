import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { ScaledSheet } from 'react-native-size-matters';
import { white, black } from '../../config/colors';

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: '5@s',
  },
  labelContainer: {
    flex: 1,
  },
  textContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  label: {
    fontSize: '14@s',
  },
  text: {
    fontSize: '14@s',
    fontWeight: 'bold',
  },
});

const VehicleLabelRow = ({ label, text, style }) => {
  const isDark = useSelector((state) => state.core.isDark);

  return (
    <View style={{ ...styles.container, ...style }}>
      <View style={styles.labelContainer}>
        <Text style={{ ...styles.label, color: isDark ? white : black }}>{label}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={{ ...styles.text, color: isDark ? white : black }}>{text}</Text>
      </View>
    </View>
  );
};

export default VehicleLabelRow;
