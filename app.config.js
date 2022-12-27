require('dotenv/config');

export default {
  name: 'MapSpeedExpo',
  slug: 'MapSpeedExpo',
  version: '1.0.0',
  expo: {
    name: 'MapSpeedExpo',
    slug: 'MapSpeedExpo',
    version: '1.0.0',
    orientation: 'portrait',
    primaryColor: '#A60A0A',
    icon: './assets/icon.png',
    scheme: 'com.guenton.mapspeed',
    extra: {
      API_KEY: process.env.API_KEY,
      AUTH_DOMAIN: process.env.AUTH_DOMAIN,
      DATABASE_URL: process.env.DATABASE_URL,
      PROJECT_ID: process.env.PROJECT_ID,
      STORAGE_BUCKET: process.env.STORAGE_BUCKET,
      MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
      APP_ID: process.env.APP_ID,
      MEASUREMENT_ID: process.env.MEASUREMENT_ID,
      GOOGLE_WEB_CLIENT_ID: process.env.GOOGLE_WEB_CLIENT_ID,
      FACEBOOK_ID: process.env.FACEBOOK_ID,
    },
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    androidNavigationBar: {
      visible: 'leanback',
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      jsEngine: 'hermes',
      supportsTablet: true,
      bundleIdentifier: 'com.guenton.mapspeed',
    },
    android: {
      jsEngine: 'hermes',
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#FFFFFF',
      },
      package: 'com.guenton.mapspeed',
    },
    web: {
      favicon: './assets/favicon.png',
    },
  },
};
