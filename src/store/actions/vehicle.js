export const SET_VIN = 'SET_VIN';

export const SET_ERR_VIN = 'SET_ERR_VIN';

export const setVin = (input = '') => ({ type: SET_VIN, input });

export const setErrVin = (err = '') => ({ type: SET_ERR_VIN, err });
