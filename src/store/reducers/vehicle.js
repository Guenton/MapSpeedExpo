import { SET_ERR_VIN, SET_VIN } from '../actions/vehicle';

const initialState = {
  vin: '',
  errVin: '',
};

const vehicleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VIN:
      return { ...state, vin: action.input };
    case SET_ERR_VIN:
      return { ...state, errVin: action.err };
    default:
      return state;
  }
};

export default vehicleReducer;
