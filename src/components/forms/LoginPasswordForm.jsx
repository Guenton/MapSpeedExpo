import React, { createRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { isEmpty, isEmail } from 'validator';
import { useTranslation } from 'react-i18next';

import EmailInput from '../inputs/EmailInput';
import PasswordInput from '../inputs/PasswordInput';
import ForgotPasswordButton from '../buttons/ForgotPasswordButton';
import LoginButton from '../buttons/LoginButton';

import { getCurrentUserId, signInWithPasswordAsync } from '../../firebase/auth';

import { setAlert, setLoading } from '../../store/actions/core';
import {
  setUserId,
  setEmail,
  setPassword,
  setErrEmail,
  setErrPassword,
} from '../../store/actions/auth';
import ScaleInView from '../animations/ScaleInView';

const styles = ScaledSheet.create({
  container: { flex: 1 },
  inputContainer: { width: '290@s', marginLeft: '8@s' },
  input: { marginBottom: '18@s' },
  loginButton: { marginVertical: '20@s' },
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
    if (!email) return emailRef.current.focus();
    if (!password) return passwordRef.current.focus();
  };

  const validateAndSetEmail = (val) => {
    if (isEmpty(val)) dispatch(setErrEmail(t('err.notFilled')));
    else if (!isEmail(val)) dispatch(setErrEmail(t('err.notEmail')));
    else dispatch(setErrEmail());

    dispatch(setEmail(val));
  };

  const validateAndSetPassword = (val) => {
    if (isEmpty(val)) dispatch(setErrPassword(t('err.notFilled')));
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

        await signInWithPasswordAsync(email, password);

        dispatch(setUserId(getCurrentUserId()));
        dispatch(setPassword());
        dispatch(setLoading(false));
        onGoMain();
      } catch (err) {
        dispatch(setLoading(false));
        dispatch(setAlert(err));
      }
    }
  };

  return (
    <ScaleInView style={{ ...styles.container, ...style }}>
      <View style={styles.inputContainer}>
        <EmailInput
          inputRef={emailRef}
          containerStyle={styles.input}
          value={email}
          errorMessage={errEmail}
          onSubmit={() => shakeOnError()}
          onChange={(val) => validateAndSetEmail(val)}
        />

        <PasswordInput
          inputRef={passwordRef}
          value={password}
          errorMessage={errPassword}
          onSubmit={() => loginWithFirebase()}
          onChange={(val) => validateAndSetPassword(val)}
        />

        <ForgotPasswordButton style={styles.input} onPress={() => onGoReset()} />
      </View>
      <LoginButton style={styles.loginButton} onPress={() => loginWithFirebase()} />
    </ScaleInView>
  );
};

export default LoginPasswordForm;
