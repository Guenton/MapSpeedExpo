import React, { createRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { isEmpty, isEmail } from 'validator';
import { useTranslation } from 'react-i18next';

import ScaleInView from '../animations/ScaleInView';
import FormHeader from '../labels/FormHeader';
import EmailInput from '../inputs/EmailInput';
import ConfirmButton from '../buttons/ConfirmButton';

import { setAlert, setLoading, setRoute } from '../../store/actions/core';
import { setEmail, setErrEmail } from '../../store/actions/auth';

import { emailPasswordResetAsync } from '../../firebase/auth';

const styles = ScaledSheet.create({
  container: { flex: 1 },
  inputContainer: { width: '290@s', marginLeft: '8@s' },
  header: { marginBottom: '18@s' },
  input: { marginBottom: '18@s' },
  loginButton: { marginVertical: '20@s' },
});

const LoginResetForm = ({ style }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const emailRef = createRef();
  const email = useSelector((state) => state.auth.email);
  const errEmail = useSelector((state) => state.auth.errEmail);

  const shakeOnError = () => {
    if (errEmail) emailRef.current.shake();
    if (!email) return emailRef.current.focus();
  };

  const validateAndSetEmail = (val) => {
    if (isEmpty(val)) dispatch(setErrEmail(t('err.notFilled')));
    else if (!isEmail(val)) dispatch(setErrEmail(t('err.notEmail')));
    else dispatch(setErrEmail());

    dispatch(setEmail(val));
  };

  const sendPasswordResetEmail = () => {
    validateAndSetEmail(email);
    if (errEmail) return shakeOnError();

    dispatch(setLoading());
    emailPasswordResetAsync(email)
      .then(() => {
        dispatch(setAlert(t('resetPasswordSent'), 'info'));
        dispatch(setRoute('login-password'));
      })
      .catch((err) => dispatch(setAlert(err)))
      .finally(() => dispatch(setLoading(false)));
  };

  return (
    <ScaleInView style={{ ...styles.container, ...style }}>
      <View style={styles.inputContainer}>
        <FormHeader
          style={styles.header}
          label={t('resetPassword')}
          subLabel={t('resetPasswordDesc')}
        />

        <EmailInput
          inputRef={emailRef}
          containerStyle={styles.input}
          value={email}
          errorMessage={errEmail}
          onSubmit={() => sendPasswordResetEmail()}
          onChange={(val) => validateAndSetEmail(val)}
        />
      </View>

      <ConfirmButton
        style={styles.loginButton}
        disabled={!email || errEmail}
        onPress={() => sendPasswordResetEmail()}
      />
    </ScaleInView>
  );
};

export default LoginResetForm;
