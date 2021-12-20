import React from 'react';
import { Pressable, Text } from 'react-native';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import I18n from 'i18n-js';

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
});

const SelectLoginPasswordOptionForm = ({ onPressLogin, onPressSignup, isLogin, isSignup }) => {
  const { t } = I18n;

  return (
    <View style={styles.container}>
      <Pressable style={styles.link} onPress={() => onPressLogin()}>
        <Text style={styles.text}>{t('login').toLocaleUpperCase()}</Text>
      </Pressable>
      <Pressable style={styles.link} onPress={() => onPressSignup()}>
        <Text style={styles.text}>{t('signup').toLocaleUpperCase()}</Text>
      </Pressable>
    </View>
  );
};

export default SelectLoginPasswordOptionForm;
