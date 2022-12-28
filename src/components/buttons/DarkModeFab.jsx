import React from 'react';
import { useDispatch } from 'react-redux';
import IconFab from './IconFab';

import { toggleDarkMode } from '../../store/actions/core';

const DarkModeFab = ({ style }) => {
  const dispatch = useDispatch();

  return <IconFab style={style} name="adjust" onPress={() => dispatch(toggleDarkMode())} />;
};

export default DarkModeFab;
