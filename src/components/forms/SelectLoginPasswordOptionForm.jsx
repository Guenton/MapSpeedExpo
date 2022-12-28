import React, { useEffect, useState } from 'react';
import { Pressable, Text } from 'react-native';
import { View } from 'react-native';
import { scale, ScaledSheet } from 'react-native-size-matters';
import { animated, useSpring } from '@react-spring/native';
import { useTranslation } from 'react-i18next';

import { primaryOpacity, white, black } from '../../config/colors';
import { useSelector } from 'react-redux';

const styles = ScaledSheet.create({
  container: {
    height: '50@s',
    flexDirection: 'row',
    marginLeft: '15@s',
  },
  link: {
    justifyContent: 'center',
    paddingHorizontal: '15@s',
  },
  text: {
    fontSize: '14@s',
    fontWeight: 'bold',
  },
  bar: {
    position: 'absolute',
    width: '40@s',
    top: '40@s',
    marginLeft: '55@s',
    borderWidth: '1@s',
    opacity: 0,
    backgroundColor: primaryOpacity,
    borderColor: primaryOpacity,
    shadowColor: primaryOpacity,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
});

const AnimatedView = animated(View);

const SelectLoginPasswordOptionForm = ({ onPressLogin, onPressSignup, isLogin, isSignup }) => {
  const { t } = useTranslation();

  const isDark = useSelector((state) => state.core.isDark);

  const [highlightBarPosition, setHighlightBarPosition] = useState(0);

  useEffect(() => {
    if (isLogin) setHighlightBarPosition(scale(-39));
    else if (isSignup) setHighlightBarPosition(scale(37));
    else setHighlightBarPosition(0);
  });

  const slideTransition = useSpring({
    to: { ...styles.bar, left: highlightBarPosition, opacity: isLogin || isSignup ? 1 : 0 },
  });

  return (
    <View style={styles.container}>
      <AnimatedView style={slideTransition} />
      <Pressable style={styles.link} onPress={() => onPressLogin()}>
        <Text style={{ ...styles.text, color: isDark ? white : black }}>
          {t('login').toLocaleUpperCase()}
        </Text>
      </Pressable>
      <Pressable style={styles.link} onPress={() => onPressSignup()}>
        <Text style={{ ...styles.text, color: isDark ? white : black }}>
          {t('signup').toLocaleUpperCase()}
        </Text>
      </Pressable>
    </View>
  );
};

export default SelectLoginPasswordOptionForm;
