// Import React Native Dependencies
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ScaledSheet } from 'react-native-size-matters';

import FadeInAppContent from '../animations/FadeInAppContent';
import SelectLoginTypeForm from '../forms/SelectLoginTypeForm';
import MapLogo from '../images/MapLogo';

import { setLoginType, setGoogleUser, setFacebookUser } from '../../store/actions/login';

import * as Google from 'expo-google-app-auth';
import * as Facebook from 'expo-facebook';
import { googleOAuthAndroidId, googleOAuthIosId } from '../../../env';

const styles = ScaledSheet.create({ logo: { marginTop: '50@s' } });

const LoginScreenHeaderView = ({ setLoginType, setGoogleUser }) => {
  const handleLoginTypeSubmit = (type) => {
    switch (type) {
      case 'google':
        setLoginType('google');
        googleOAuthLogin();
      case 'facebook':
        setLoginType('facebook');
        facebookOAuthLogin();
      default:
        setLoginType('user');
        userAndPassLogin();
    }
  };

  const googleOAuthLogin = async () => {
    try {
      const { type, accessToken, user } = await Google.logInAsync({
        androidClientId: googleOAuthAndroidId || '',
        iosClientId: googleOAuthIosId || '',
        scopes: ['profile', 'email'],
      });

      if (type === 'success') setGoogleUser(user);
      console.log(user);
    } catch (err) {
      console.log('failed - googleOAuthLogin: ' + err);
    }
  };
  const facebookOAuthLogin = async () => {};
  const userAndPassLogin = () => {};

  // Handle Login with Google oAuth
  const handleGoogleLogin = async () => {
    try {
      const config = { clientId: googleOAuthclientId || '' };
      const { type, accessToken, user } = await Google.logInAsync(config);

      // if (type === 'success') loginUserGoogle(user);
    } catch (e) {
      console.log('Google Sign in error:', e);
    }
  };

  // Handle Login with Facebook SDK
  const handleFacebookLogin = async () => {
    try {
      await Facebook.initializeAsync({
        appId: '<APP_ID>',
      });

      const {
        type,
        token,
        expirationDate,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile', 'email'],
      });

      if (type === 'success') {
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        const userData = await response.json();

        // loginUserFacebook(userData);
      }
    } catch (e) {
      console.log('Facebook Sign in error:', e);
    }
  };

  return (
    <FadeInAppContent>
      <MapLogo style={styles.logo} />

      <SelectLoginTypeForm onSubmit={handleLoginTypeSubmit} />
    </FadeInAppContent>
  );
};

const mapDispatchToProps = { setLoginType, setGoogleUser, setFacebookUser };

export default connect(null, mapDispatchToProps)(LoginScreenHeaderView);
