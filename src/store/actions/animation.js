export const SET_TRANSITIONING = 'SET_TRANSITIONING';
export const SET_TOP_CIRCLE_POSITION = 'SET_TOP_CIRCLE_POSITION';
export const SET_NEXT_TOP_CIRCLE_POSITION = 'SET_NEXT_TOP_CIRCLE_POSITION';
export const SET_BOTTOM_CIRCLE_POSITION = 'SET_BOTTOM_CIRCLE_POSITION';
export const SET_NEXT_BOTTOM_CIRCLE_POSITION = 'SET_NEXT_BOTTOM_CIRCLE_POSITION';

export const setTransitioning = (bool = true) => ({ type: SET_TRANSITIONING, bool });

export const setTopCirclePosition = (input = null) => ({
  type: SET_TOP_CIRCLE_POSITION,
  input,
});
export const setNextTopCirclePosition = (input = null) => ({
  type: SET_NEXT_TOP_CIRCLE_POSITION,
  input,
});
export const setBottomCirclePosition = (input = null) => ({
  type: SET_BOTTOM_CIRCLE_POSITION,
  input,
});
export const setNextBottomCirclePosition = (input = null) => ({
  type: SET_NEXT_BOTTOM_CIRCLE_POSITION,
  input,
});
