export const SET_TOP_CIRCLE_POSITION = 'SET_TOP_CIRCLE_POSITION';
export const SET_BOTTOM_CIRCLE_POSITION = 'SET_BOTTOM_CIRCLE_POSITION';

export const setTopCirclePosition = (input = null) => ({
  type: SET_TOP_CIRCLE_POSITION,
  input,
});
export const setBottomCirclePosition = (input = null) => ({
  type: SET_BOTTOM_CIRCLE_POSITION,
  input,
});
