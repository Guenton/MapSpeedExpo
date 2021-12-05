import { SET_TOP_CIRCLE_POSITION, SET_BOTTOM_CIRCLE_POSITION } from '../actions/animation';

const initialState = {
  topCirclePosition: null,
  bottomCirclePosition: null,
};

const animationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOP_CIRCLE_POSITION:
      return { ...state, email: action.input };
    case SET_BOTTOM_CIRCLE_POSITION:
      return { ...state, password: action.input };
    default:
      return state;
  }
};

export default animationReducer;
