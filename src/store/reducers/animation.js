import { scale } from 'react-native-size-matters';

import {
  SET_TRANSITIONING,
  SET_MORPHING,
  SET_TOP_CIRCLE_POSITION,
  SET_NEXT_TOP_CIRCLE_POSITION,
  SET_BOTTOM_CIRCLE_POSITION,
  SET_NEXT_BOTTOM_CIRCLE_POSITION,
} from '../actions/animation';

const initialState = {
  transitioning: false, // Use Transitioning for full view transition
  morphing: false, // Use Morphing for animating individual items
  topCirclePosition: scale(-1000),
  nextTopCirclePosition: null,
  bottomCirclePosition: scale(1000),
  nextBottomCirclePosition: null,
};

const animationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRANSITIONING:
      return { ...state, transitioning: action.bool };
    case SET_MORPHING:
      return { ...state, morphing: action.bool };
    case SET_TOP_CIRCLE_POSITION:
      return { ...state, topCirclePosition: action.input };
    case SET_NEXT_TOP_CIRCLE_POSITION:
      return { ...state, nextTopCirclePosition: action.input };
    case SET_BOTTOM_CIRCLE_POSITION:
      return { ...state, bottomCirclePosition: action.input };
    case SET_NEXT_BOTTOM_CIRCLE_POSITION:
      return { ...state, nextBottomCirclePosition: action.input };
    default:
      return state;
  }
};

export default animationReducer;
