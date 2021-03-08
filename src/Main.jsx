/*

---> TL;DR Screen Router <---

*/

// Import React Dependencies
import React, { useState } from 'react';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

// Import Language Packs
import en from './assets/languages/en';
import es from './assets/languages/es';
import nl from './assets/languages/nl';
import pap from './assets/languages/pap';

// Import Screen Components
import LoginScreen from './screens/LoginScreen';
import StartScreen from './screens/StartScreen';

// Set the key-value pairs for the different languages you want to support.
i18n.translations = { en, es, nl, pap };

// Set the locale once at the beginning of your app.
i18n.locale = Localization.locale;
// When a value is missing from a language it'll fallback to another language with the key present.
i18n.fallbacks = true;

const Main = () => {
  // Initialize Screen State to start route
  const [screen, setScreen] = useState('start');

  // Router function
  const router = (route) => setScreen(route);

  return (
    <>
      {screen === 'start' && <StartScreen setRoute={router} />}
      {screen === 'login' && <LoginScreen setRoute={router} />}
    </>
  );
};

export default Main;
