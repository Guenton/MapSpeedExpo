import React from 'react';
import { Dimensions, View } from 'react-native';
import { useSelector } from 'react-redux';
import { ScaledSheet } from 'react-native-size-matters';
import { TouchableOpacity } from 'react-native';

const width = Dimensions.get('window').width * 0.15;
const styles = ScaledSheet.create({
  container: {
    width: width,
    height: width,
    borderRadius: width,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

const FabContainer = ({ style, children, size, reverse, onPress }) => {
  const isDark = useSelector((state) => state.core.isDark);
  const primary = useSelector((state) => state.color.primary);
  const white = useSelector((state) => state.color.white);
  const grey = useSelector((state) => state.color.grey);

  // Set backgroundColor depending on Redux isDark state
  let backgroundColor = isDark ? grey : white;
  backgroundColor = reverse ? primary : backgroundColor;

  // Set Size if given by parent else use default
  const customSize = size ? { width: size, height: size, borderRadius: size } : {};
  const styleContainer = { backgroundColor, ...customSize };

  return (
    <View style={[styles.container, styleContainer, style]}>
      <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => onPress()}>
        {children}
      </TouchableOpacity>
    </View>
  );
};

export default FabContainer;
