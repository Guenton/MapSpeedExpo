import React, { useEffect, useState } from 'react';
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

  const [backgroundColor, setBackgroundColor] = useState(white);

  useEffect(() => {
    if (reverse) setBackgroundColor(primary);
    else setBackgroundColor(isDark ? grey : white);
  }, [isDark, primary, reverse]);

  const customSize = size ? { width: size, height: size, borderRadius: size } : {};

  return (
    <View style={{ ...styles.container, backgroundColor, ...customSize, ...style }}>
      <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => onPress()}>
        {children}
      </TouchableOpacity>
    </View>
  );
};

export default FabContainer;
