import React from 'react';
import { useSelector } from 'react-redux';

import FabContainer from '../containers/FabContainer';
import LangFlag from '../images/LangFlag';

const LanguageSelectFab = ({ style, flag, onPress }) => {
  const currentLang = useSelector((state) => state.lang.currentLang);

  return (
    <FabContainer style={style} onPress={() => (onPress ? onPress() : null)}>
      <LangFlag flag={flag ? flag : currentLang} />
    </FabContainer>
  );
};

export default LanguageSelectFab;
