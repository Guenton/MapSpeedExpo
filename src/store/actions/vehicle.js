export const SET_VIN = 'SET_VIN';
export const SET_MAKE = 'SET_MAKE';
export const SET_MODEL = 'SET_MODEL';
export const SET_YEAR = 'SET_YEAR';
export const SET_BODY_CLASS = 'SET_BODY_CLASS';
export const SET_NUM_OF_DOORS = 'SET_NUM_OF_DOORS';
export const SET_TRANSMISSION_TYPE = 'SET_TRANSMISSION_TYPE';
export const SET_TRANSMISSION_SPEEDS = 'SET_TRANSMISSION_SPEEDS';
export const SET_ENGINE_CYLINDERS = 'SET_ENGINE_CYLINDERS';
export const SET_ENGINE_CC = 'SET_ENGINE_CC';
export const SET_ENGINE_L = 'SET_ENGINE_L';
export const SET_ENGINE_INFO = 'SET_ENGINE_INFO';
export const SET_FUEL = 'SET_FUEL';
export const SET_VALVE_TRAIN = 'SET_VALVE_TRAIN';

export const SET_VEHICLE_DETAILS = 'SET_VEHICLE_DETAILS';

export const SET_ERR_VIN = 'SET_ERR_VIN';
export const SET_ERR_MAKE = 'SET_ERR_MAKE';
export const SET_ERR_MODEL = 'SET_ERR_MODEL';
export const SET_ERR_YEAR = 'SET_ERR_YEAR';

export const setVin = (input = '') => ({ type: SET_VIN, input });
export const setMake = (input = '') => ({ type: SET_MAKE, input });
export const setModel = (input = '') => ({ type: SET_MODEL, input });
export const setYear = (input = '') => ({ type: SET_YEAR, input });
export const setBodyClass = (input = '') => ({ type: SET_BODY_CLASS, input });
export const setNumOfDoors = (input = '') => ({ type: SET_NUM_OF_DOORS, input });
export const setTransmissionType = (input = '') => ({ type: SET_TRANSMISSION_TYPE, input });
export const setTransmissionSpeeds = (input = '') => ({ type: SET_TRANSMISSION_SPEEDS, input });
export const setEngineCylinders = (input = '') => ({ type: SET_ENGINE_CYLINDERS, input });
export const setEngineCC = (input = '') => ({ type: SET_ENGINE_CC, input });
export const setEngineL = (input = '') => ({ type: SET_ENGINE_L, input });
export const setEngineInfo = (input = '') => ({ type: SET_ENGINE_INFO, input });
export const setFuel = (input = '') => ({ type: SET_FUEL, input });
export const setValveTrain = (input = '') => ({ type: SET_VALVE_TRAIN, input });

export const setVehicleDetails = (object = {}) => ({ type: SET_VEHICLE_DETAILS, object });

export const setErrVin = (err = '') => ({ type: SET_ERR_VIN, err });
export const setErrMake = (err = '') => ({ type: SET_ERR_MAKE, err });
export const setErrModel = (err = '') => ({ type: SET_ERR_MODEL, err });
export const setErrYear = (err = '') => ({ type: SET_ERR_YEAR, err });
