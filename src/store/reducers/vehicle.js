import {
  SET_BODY_CLASS,
  SET_ENGINE_CC,
  SET_ENGINE_CYLINDERS,
  SET_ENGINE_INFO,
  SET_ENGINE_L,
  SET_ERR_MAKE,
  SET_ERR_MODEL,
  SET_ERR_VIN,
  SET_ERR_YEAR,
  SET_FUEL,
  SET_MAKE,
  SET_MODEL,
  SET_NUM_OF_DOORS,
  SET_TRANSMISSION_SPEEDS,
  SET_TRANSMISSION_TYPE,
  SET_VALVE_TRAIN,
  SET_VEHICLE_DETAILS,
  SET_VIN,
  SET_YEAR,
} from '../actions/vehicle';

const initialState = {
  vin: '',
  make: '',
  model: '',
  year: '',
  bodyClass: '',
  numOfDoors: '',
  transmissionType: '',
  transmissionSpeeds: '',
  engineCylinders: '',
  engineCC: '',
  engineL: '',
  engineInfo: '',
  fuel: '',
  valveTrain: '',
  errVin: '',
  errMake: '',
  errModel: '',
  errYear: '',
};

const vehicleReducer = (state = initialState, action) => {
  switch (action.type) {
    // Individual Setters
    case SET_VIN:
      return { ...state, vin: action.input };
    case SET_MAKE:
      return { ...state, make: action.input };
    case SET_MODEL:
      return { ...state, model: action.input };
    case SET_YEAR:
      return { ...state, year: action.input };
    case SET_BODY_CLASS:
      return { ...state, bodyClass: action.input };
    case SET_NUM_OF_DOORS:
      return { ...state, numOfDoors: action.input };
    case SET_TRANSMISSION_TYPE:
      return { ...state, transmissionType: action.input };
    case SET_TRANSMISSION_SPEEDS:
      return { ...state, transmissionSpeeds: action.input };
    case SET_ENGINE_CYLINDERS:
      return { ...state, engineCylinders: action.input };
    case SET_ENGINE_CC:
      return { ...state, engineCC: action.input };
    case SET_ENGINE_L:
      return { ...state, engineL: action.input };
    case SET_ENGINE_INFO:
      return { ...state, engineInfo: action.input };
    case SET_FUEL:
      return { ...state, fuel: action.input };
    case SET_VALVE_TRAIN:
      return { ...state, valveTrain: action.input };

    // Full State Setters
    case SET_VEHICLE_DETAILS:
      return { ...state, ...action.object };

    // Error Setters
    case SET_ERR_VIN:
      return { ...state, errVin: action.err };
    case SET_ERR_MAKE:
      return { ...state, errMake: action.err };
    case SET_ERR_MODEL:
      return { ...state, errModel: action.err };
    case SET_ERR_YEAR:
      return { ...state, errYear: action.err };
    default:
      return state;
  }
};

export default vehicleReducer;
