// Import React Native Dependencies
import React from 'react';
import { connect } from 'react-redux';
import { ScaledSheet } from 'react-native-size-matters';

// Import Google And Facebook Login
import * as Google from 'expo-google-app-auth';
import * as Facebook from 'expo-facebook';

// Import Components
import FadeInAppContent from '../animations/FadeInAppContent';
import SelectLoginTypeForm from '../forms/SelectLoginTypeForm';
import MapLogo from '../images/MapLogo';

// Import Redux Actions
import { loginUserGoogle, loginUserFacebook } from '../../store/actions/user';

// Google Login Config
const IOS_GOOGLE_CLIENT_ID = "541211848793-lggdn4e9q4i4kdl3tnv156cn3fkdt3ps.apps.googleusercontent.com";

// Styles
const styles = ScaledSheet.create({ logo: { marginTop: '50@vs' } });

const LoginScreenHeaderView = ({ loginUserGoogle }) => {

  // Handle correct login based on loginType
  const onSubmit = loginType => {
    switch (loginType) {
      case 'google':
        handleGoogleLogin();
      case 'facebook':
        handleFacebookLogin();
      default:
        // default to regular login
    }
  }

  // Handle Login with Google oAuth
  const handleGoogleLogin = async () => {
    try {
      const config = { iosClientId: IOS_GOOGLE_CLIENT_ID };
      const { type, user } = await Google.logInAsync(config);

      if (type === 'success') loginUserGoogle(user);

    } catch (e) {
      console.log('Google Sign in error:', e)
    }
  }

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
        
        loginUserFacebook(userData);
      }
    } catch (e) {
      console.log('Facebook Sign in error:', e)
    }
  }

  return (
    <FadeInAppContent>
      {/* Start Logo */}
      <MapLogo style={styles.logo} />

      {/* Start Floating Action Button */}
      <SelectLoginTypeForm onSubmit={onSubmit} />
    </FadeInAppContent>
  );
}

// Map Redux dispatch actions to "props" passed to functional component
const mapDispatchToProps = {
  loginUserGoogle,
  loginUserFacebook
};

// Connect Functional Component to Redux and Export
export default connect(null, mapDispatchToProps)(LoginScreenHeaderView);

