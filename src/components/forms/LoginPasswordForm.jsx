import React, { createRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View } from 'react-native';
import { ScaledSheet, scale } from 'react-native-size-matters';
import { isEmpty, isEmail } from 'validator';
import * as SecureStore from 'expo-secure-store';
import firebase from 'firebase';
import i18n from 'i18n-js';
import { useTranslation } from "react-i18next";

import EmailInput from '../inputs/EmailInput';
import PasswordInput from '../inputs/PasswordInput';
import ForgotPasswordButton from '../buttons/ForgotPasswordButton';

import { setLoading } from '../../store/actions/core';
import {
  setUserId,
  setEmail,
  setPassword,
  setErrEmail,
  setErrPassword,
} from '../../store/actions/auth';

const styles = ScaledSheet.create({
  container: { justifyContent: 'space-evenly' },
  inputContainer: { width: '290@s', alignSelf: 'center' },
  input: { marginBottom: '18@s' },
  center: { alignSelf: 'center' },
});

const LoginPasswordForm = ({ style, onGoReset, onGoMain }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const emailRef = createRef();
  const passwordRef = createRef();

  const email = useSelector((state) => state.auth.email);
  const password = useSelector((state) => state.auth.password);

  const errEmail = useSelector((state) => state.auth.errEmail);
  const errPassword = useSelector((state) => state.auth.errPassword);

  const shakeOnError = () => {
    if (errEmail) emailRef.current.shake();
    if (errPassword) passwordRef.current.shake();
  };

  const validateAndSetEmail = (val) => {
    if (isEmpty(val)) dispatch(setErrEmail(t('errNotFilled')));
    else if (!isEmail(val)) dispatch(setErrEmail(t('errNotEmail')));
    else dispatch(setErrEmail());

    dispatch(setEmail(val));
  };

  const validateAndSetPassword = (val) => {
    if (isEmpty(val)) dispatch(setErrPassword(t('errNotFilled')));
    else dispatch(setErrPassword());

    dispatch(setPassword(val));
  };

  const loginWithFirebase = async () => {
    validateAndSetEmail(email);
    validateAndSetPassword(password);

    if (errEmail || errPassword) return shakeOnError();
    if (email && password) {
      try {
        dispatch(setLoading());
        await firebase.auth().signInWithEmailAndPassword(email, password);

        const canStore = await SecureStore.isAvailableAsync();
        if (canStore) await SecureStore.setItemAsync('email', email);
        if (canStore) await SecureStore.setItemAsync('password', password);

        const userId = firebase.auth().currentUser.uid;

        await firebase.database().ref(`users/${userId}`).set({
          userId,
          email,
        });

        dispatch(setUserId(userId));
        dispatch(setPassword());

        dispatch(setLoading(false));
        onGoMain();
      } catch (err) {
        dispatch(setLoading(false));
        console.error(err);
        console.log(err.code);
        console.log(err.message);
      }
    }
  };

  return (
    <View style={{ ...styles.container, ...style }}>
      <View style={styles.inputContainer}>
        <EmailInput
          inputRef={emailRef}
          containerStyle={styles.input}
          value={email}
          errorMessage={errEmail}
          onBlur={() => shakeOnError()}
          onChange={(val) => validateAndSetEmail(val)}
        />
        <PasswordInput
          inputRef={passwordRef}
          value={password}
          errorMessage={errPassword}
          onBlur={() => loginWithFirebase()}
          onChange={(val) => validateAndSetPassword(val)}
        />
        <ForgotPasswordButton onPress={() => onGoReset()} />
      </View>
    </View>
  );
};

export default LoginPasswordForm;
