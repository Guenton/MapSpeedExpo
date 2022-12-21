import React from 'react';
import { useSelector } from 'react-redux';
import { View, TouchableOpacity, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
// import i18n from 'i18n-js';
import { useTranslation } from "react-i18next";

import FacebookFab from './FacebookFab';
import GoogleFab from './GoogleFab';
import IconFab from './IconFab';

import { white, black, grey } from '../../config/colors';

const styles = ScaledSheet.create({
  container: { flexDirection: 'row', alignItems: 'center' },
  textBox: {
    width: '225@s',
    height: '40@s',
    marginLeft: '-10@s',
    paddingHorizontal: '15@s',
    borderTopRightRadius: '20@s',
    borderBottomRightRadius: '20@s',
    justifyContent: 'center',
    // IOS Shadows
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    zIndex: -1,
    // Android Shadows
    elevation: 4,
  },
  text: { fontSize: '11@s' },
});

const SelectLoginTypeButton = ({ style, type, onSubmit }) => {
  const { t } = useTranslation();

  const isDark = useSelector((state) => state.core.isDark);

  return (
    <>
      {/* Return User Login Selector */}
      {type === 'user' && (
        <View style={{ ...styles.container, ...style }}>
          <IconFab name="user-alt" onPress={() => onSubmit('user')} />
          <TouchableOpacity
            style={{ ...styles.textBox, backgroundColor: isDark ? grey : white }}
            onPress={() => onSubmit('user')}>
            <Text style={{ ...styles.text, color: isDark ? white : black }}>
              {t('loginWith')} {t('username')} {t('and')} {t('password')}
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Return Facebook Login Selector */}
      {type === 'facebook' && (
        <View style={{ ...styles.container, ...style }}>
          <FacebookFab onPress={() => onSubmit('facebook')} />
          <TouchableOpacity
            style={{ ...styles.textBox, backgroundColor: isDark ? grey : white }}
            onPress={() => onSubmit('facebook')}>
            <Text style={{ ...styles.text, color: isDark ? white : black }}>
              {t('loginWith')} {t('facebook')}
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Return Google Login Selector */}
      {type === 'google' && (
        <View style={{ ...styles.container, ...style }}>
          <GoogleFab onPress={() => onSubmit('google')} />
          <TouchableOpacity
            style={{ ...styles.textBox, backgroundColor: isDark ? grey : white }}
            onPress={() => onSubmit('google')}>
            <Text style={{ ...styles.text, color: isDark ? white : black }}>
              {t('loginWith')} {t('google')}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default SelectLoginTypeButton;
