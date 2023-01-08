import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IconFab from './IconFab';

import { setAlert, setDarkMode } from '../../store/actions/core';
import storeKeyValueAsync from '../../services/auth/storeKeyValueAsync';

const DarkModeFab = ({ style }) => {
  const dispatch = useDispatch();

  const isDark = useSelector((state) => state.core.isDark);

  const toggleDarkModeAndStore = () => {
    if (isDark) {
      dispatch(setDarkMode(false));
      storeKeyValueAsync('isDark', 'false').catch((err) => dispatch(setAlert(err)));
    } else {
      dispatch(setDarkMode());
      storeKeyValueAsync('isDark', 'true').catch((err) => dispatch(setAlert(err)));
    }
  };

  return <IconFab style={style} name="adjust" onPress={() => toggleDarkModeAndStore()} />;
};

export default DarkModeFab;
