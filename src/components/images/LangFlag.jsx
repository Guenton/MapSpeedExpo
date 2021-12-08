import React from 'react';
import { Image } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

const flagCur = require('../../assets/images/flagCur.png');
const flagNld = require('../../assets/images/flagNld.png');
const flagSpa = require('../../assets/images/flagSpa.png');
const flagEng = require('../../assets/images/flagEng.png');

const styles = ScaledSheet.create({
  flag: { width: '25@s', height: '25@s' },
});

const LangFlag = ({ style, flag }) => {
  const src = () => {
    switch (flag) {
      case 'pap':
        return flagCur;
      case 'es':
        return flagSpa;
      case 'nl':
        return flagNld;
      default:
        return flagEng;
    }
  };

  return <Image style={{ ...styles.flag, ...style }} source={src()} resizeMode="contain" />;
};

export default LangFlag;
