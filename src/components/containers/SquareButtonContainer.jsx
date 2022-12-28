import React, { useEffect, useState } from 'react';
import { Dimensions, View } from 'react-native';
import { useSelector } from 'react-redux';
import { ScaledSheet } from 'react-native-size-matters';
import { TouchableOpacity } from 'react-native';

import { primary, white, grey } from '../../config/colors';

const width = Dimensions.get('window').width * 0.1;
const styles = ScaledSheet.create({
  container: {
    width: width,
    height: width,
    borderRadius: '3@s',
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

const SquareButtonContainer = ({ style, children, size, reverse, onPress }) => {
  const isDark = useSelector((state) => state.core.isDark);

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

export default SquareButtonContainer;
