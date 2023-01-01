import { SET_ERR_VIN, SET_VEHICLE_DETAILS, SET_VIN } from '../actions/vehicle';

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
};

const vehicleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VIN:
      return { ...state, vin: action.input };
    case SET_VEHICLE_DETAILS:
      return { ...state, ...action.object };
    case SET_ERR_VIN:
      return { ...state, errVin: action.err };
    default:
      return state;
  }
};

export default vehicleReducer;
