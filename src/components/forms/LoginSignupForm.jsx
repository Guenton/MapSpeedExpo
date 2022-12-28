import React, { createRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View } from 'react-native';
import { ScaledSheet, scale } from 'react-native-size-matters';
import { isEmpty, isEmail } from 'validator';
import { useTranslation } from 'react-i18next';

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
  setPasswordConfirm,
  setErrPasswordConfirm,
} from '../../store/actions/auth';

import { getCurrentUserId } from '../../firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import authService from '../../services/auth';
import SignupButton from '../buttons/SignupButton';

const styles = ScaledSheet.create({
  container: {},
  inputContainer: { width: '290@s', alignSelf: 'center' },
  input: { marginBottom: '18@s' },
  center: { alignSelf: 'center' },
  signupButton: { marginTop: '15@s' },
});

const LoginSignupForm = ({ style, onGoLogin, onGoMain }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const emailRef = createRef();
  const passwordRef = createRef();
  const passwordConfirmRef = createRef();

  const email = useSelector((state) => state.auth.email);
  const password = useSelector((state) => state.auth.password);
  const passwordConfirm = useSelector((state) => state.auth.passwordConfirm);

  const errEmail = useSelector((state) => state.auth.errEmail);
  const errPassword = useSelector((state) => state.auth.errPassword);
  const errPasswordConfirm = useSelector((state) => state.auth.errPasswordConfirm);

  const shakeOnError = () => {
    if (errEmail) emailRef.current.shake();
    if (errPassword) passwordRef.current.shake();
    if (errPasswordConfirm) passwordConfirmRef.current.shake();
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

  const validateAndSetPasswordConfirm = (val) => {
    if (isEmpty(val)) dispatch(setErrPasswordConfirm(t('errNotFilled')));
    else if (val !== password) dispatch(setErrPasswordConfirm(t('errNotMatchingPassword')));
    else dispatch(setErrPasswordConfirm());

    dispatch(setPasswordConfirm(val));
  };

  const signupWithFirebase = async () => {
    validateAndSetEmail(email);
    validateAndSetPassword(password);
    validateAndSetPasswordConfirm(passwordConfirm);

    if (errEmail || errPassword || errPasswordConfirm) return shakeOnError();
    if (email && password && passwordConfirm) {
      try {
        dispatch(setLoading());
        await createUserWithEmailAndPassword(email, password);

        await authService.storeEmailAndPasswordAsync(email, password);

        const userId = getCurrentUserId();

        dispatch(setUserId(userId));
        dispatch(setPassword());
        dispatch(setPasswordConfirm());

        dispatch(setLoading(false));
        onGoMain();
      } catch (err) {
        dispatch(setLoading(false));
        dispatch(setAlert(err));
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
          containerStyle={styles.input}
          value={password}
          errorMessage={errPassword}
          onBlur={() => loginWithFirebase()}
          onChange={(val) => validateAndSetPassword(val)}
        />
        <PasswordInput
          isConfirm
          containerStyle={styles.input}
          inputRef={passwordConfirmRef}
          value={passwordConfirm}
          errorMessage={errPasswordConfirm}
          onBlur={() => signupWithFirebase()}
          onChange={(val) => validateAndSetPasswordConfirm(val)}
        />
        <SignupButton style={styles.signupButton} onPress={() => onGoLogin()} />
      </View>
    </View>
  );
};

export default LoginSignupForm;
