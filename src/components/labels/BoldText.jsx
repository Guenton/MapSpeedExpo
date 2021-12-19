import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  text: {
    fontSize: '12@s',
    fontWeight: 'bold',
  },
});

const BoldText = ({ label, style }) => {
  const isDark = useSelector((state) => state.core.isDark);
  const white = useSelector((state) => state.color.white);
  const black = useSelector((state) => state.color.black);

  return (
    <View style={{ style }}>
      <Text style={{ ...styles.text, color: isDark ? white : black }}>{label}</Text>
    </View>
  );
};

export default BoldText;
