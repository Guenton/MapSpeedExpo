/*

---> TL;DR Change Language Floating Action Button <---

*/

// Import React Native Dependencies
import React from 'react';
import { connect } from 'react-redux';

// Import Components
import FabContainer from '../containers/FabContainer';
import LangFlag from '../images/LangFlag';

const LanguageSelectFab = (props) => {
  // Return Customized Elements Button Component
  return (
    <FabContainer style={[props.style]} onPress={() => (props.onPress ? props.onPress() : {})}>
      <LangFlag flag={props.flag ? props.flag : props.lang} />
    </FabContainer>
  );
};

// Map Redux states to "props" passed to functional component
const mapStateToProps = (state) => ({ lang: state.lang.currentLang });

// Connect Functional Component to Redux and Export
export default connect(mapStateToProps)(LanguageSelectFab);
