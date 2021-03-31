import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import { Dimensions, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Transition, Transitioning } from 'react-native-reanimated';
import i18n from 'i18n-js';

import FadeInFooter from '../animations/FadeInFooter';
import IconFab from '../buttons/IconFab';
import LanguageSelectFab from '../buttons/LanguageSelectFab';
import SelectAppLangForm from '../forms/SelectAppLangForm';
import GuentonLogo from '../images/GuentonLogo';

import { toggleDark } from '../../store/actions/color';
import { setCurrentLang } from '../../store/actions/lang';

const width = Dimensions.get('window').width;

const styles = ScaledSheet.create({
  container: { flex: 1, width, flexDirection: 'row', justifyContent: 'space-between' },
  left: { flexDirection: 'column-reverse' },
  right: { flexDirection: 'column-reverse' },
  bottom: { flexDirection: 'row', padding: '10@s' },
  fab: { marginRight: '10@s' },
  guenton: { marginBottom: '5@s', marginRight: '5@s' },
});

const animTransition = (
  <Transition.Together>
    <Transition.In type="slide-bottom" durationMs={200} />
    <Transition.Change />
    <Transition.Out type="scale" durationMs={300} />
  </Transition.Together>
);

const StartScreenFooterView = ({ isDark, toggleDark, setCurrentLang }) => {
  const animationRef = useRef();

  const [showLangs, setShowLangs] = useState(false);

  const setLanguagePack = (language = 'en') => {
    switch (language) {
      case 'pap':
        i18n.locale = 'pap';
      case 'nld':
        i18n.locale = 'nl';
      case 'spa':
        i18n.locale = 'es';
      default:
        i18n.locale = 'en';
    }
  };

  return (
    <FadeInFooter>
      <View style={styles.container}>
        <Transitioning.View ref={animationRef} transition={animTransition} style={styles.left}>
          <View style={styles.bottom}>
            <LanguageSelectFab
              style={styles.fab}
              onPress={() => {
                animationRef.current.animateNextTransition();
                setShowLangs(!showLangs);
              }}
            />

            <IconFab
              style={styles.fab}
              reverse={isDark}
              name="adjust"
              onPress={() => toggleDark()}
            />
          </View>

          {showLangs && (
            <SelectAppLangForm
              onSelect={(selected) => {
                setCurrentLang(selected);
                setLanguagePack(selected);
                animationRef.current.animateNextTransition();
                setShowLangs(false);
              }}
            />
          )}
        </Transitioning.View>

        <View style={styles.right}>
          <GuentonLogo style={styles.guenton} />
        </View>
      </View>
    </FadeInFooter>
  );
};

const mapStateToProps = (state) => ({ isDark: state.color.isDark });
const mapDispatchToProps = { toggleDark, setCurrentLang };

export default connect(mapStateToProps, mapDispatchToProps)(StartScreenFooterView);
