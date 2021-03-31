// Import React Native Dependencies
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ScaledSheet } from 'react-native-size-matters';

import FadeInAppContent from '../animations/FadeInAppContent';
import SelectLoginTypeForm from '../forms/SelectLoginTypeForm';
import MapLogo from '../images/MapLogo';

import { setGoogleUser, setFacebookUser } from '../../store/actions/login';

import * as Google from 'expo-google-app-auth';
import * as Facebook from 'expo-facebook';
import { googleOAuthclientId } from '../../../env';

const styles = ScaledSheet.create({ logo: { marginTop: '50@vs' } });

const LoginScreenHeaderView = ({ loginType }) => {
  useEffect(() => {
    const googleOAuthLogin = async () => {};
    const facebookOAuthLogin = async () => {};
    const userAndPassLogin = () => {};

    if (loginType === 'google') googleOAuthLogin();
    else if (loginType === 'facebook') facebookOAuthLogin();
    else userAndPassLogin();
  }, [loginType]);

  const handleLoginType = (loginType) => {
    switch (loginType) {
      case 'google':
        handleGoogleLogin();
      case 'facebook':
        handleFacebookLogin();
      default:
      // default to regular login
    }
  };

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

      <SelectLoginTypeForm />
    </FadeInAppContent>
  );
};

const mapStateToProps = (state) => ({ loginType: state.login.loginType });

const mapDispatchToProps = { setGoogleUser, setFacebookUser };

export default connect(null, mapDispatchToProps)(LoginScreenHeaderView);
