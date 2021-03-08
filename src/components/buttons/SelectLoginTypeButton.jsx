/*

---> TL;DR Facebook Floating Action Button <---

*/

// Import React Native Dependencies
import React from 'react';
import { connect } from 'react-redux';
import { View, TouchableOpacity, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import i18n from 'i18n-js';

// Import Components
import FacebookFab from './FacebookFab';
import GoogleFab from './GoogleFab';
import IconFab from './IconFab';

// Styles
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

const SelectLoginTypeButton = (props) => {
  // Set backgroundColor depending on Redux isDark state
  const backgroundColor = props.color.isDark ? props.color.grey : props.color.white;

  // Set text color depending on Redus isDark state
  const color = props.color.isDark ? props.color.white : props.color.black;

  return (
    <>
      {/* Return User Login Selector */}
      {props.type === 'user' && (
        <View style={[styles.container, props.style]}>
          <IconFab name="user-alt" onPress={() => props.onSubmit('user')} />
          <TouchableOpacity
            style={[styles.textBox, { backgroundColor }]}
            onPress={() => props.onSubmit('user')}>
            <Text style={[styles.text, { color }]}>
              {i18n.t('loginWith')} {i18n.t('username')} {i18n.t('and')} {i18n.t('password')}
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Return Facebook Login Selector */}
      {props.type === 'facebook' && (
        <View style={[styles.container, props.style]}>
          <FacebookFab onPress={() => props.onSubmit('facebook')} />
          <TouchableOpacity
            style={[styles.textBox, { backgroundColor }]}
            onPress={() => props.onSubmit('facebook')}>
            <Text style={[styles.text, { color }]}>
              {i18n.t('loginWith')} {i18n.t('facebook')}
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Return Google Login Selector */}
      {props.type === 'google' && (
        <View style={[styles.container, props.style]}>
          <GoogleFab onPress={() => props.onSubmit('google')} />
          <TouchableOpacity
            style={[styles.textBox, { backgroundColor }]}
            onPress={() => props.onSubmit('google')}>
            <Text style={[styles.text, { color }]}>
              {i18n.t('loginWith')} {i18n.t('google')}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

// Map Redux states to "props" passed to functional component
const mapStateToProps = (state) => ({ color: state.color });

// Connect Functional Component to Redux and Export
export default connect(mapStateToProps)(SelectLoginTypeButton);
