import {
  SET_TRANSITIONING,
  SET_TOP_CIRCLE_POSITION,
  SET_BOTTOM_CIRCLE_POSITION,
} from '../actions/animation';

const initialState = {
  transitioning: false,
  topCirclePosition: null,
  bottomCirclePosition: null,
};

const animationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRANSITIONING:
      return { ...state, transitioning: action.bool };
    case SET_TOP_CIRCLE_POSITION:
      return { ...state, email: action.input };
    case SET_BOTTOM_CIRCLE_POSITION:
      return { ...state, password: action.input };
    default:
      return state;
  }
};

export default animationReducer;
