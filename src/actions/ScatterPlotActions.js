export const SCATTER_PLOT = "SCATTER_PLOT";
export const UPDATE_WIDTH = "UPDATE_WIDTH";
export const UPDATE_HEIGHT = "UPDATE_HEIGHT";
export const UPDATE_TOP = "UPDATE_TOP";
export const UPDATE_BOTTOM = "UPDATE_BOTTOM";
export const UPDATE_RIGHT = "UPDATE_RIGHT";
export const UPDATE_LEFT = "UPDATE_LEFT";

export const getScatterPlot = (payload) => dispatch => {
  dispatch({
    type: SCATTER_PLOT,
    payload: payload
  });
};
export const updateWidth =  (width) => {
  return {
    type: UPDATE_WIDTH,
    width
  }
}
export const updateHeight =  (height) => {
  return {
    type: UPDATE_HEIGHT,
    height
  }
}
export const updateTop =  (top) => {
  return {
    type: UPDATE_TOP,
    top
  }
}
export const updateBottom =  (bottom) => {
  return {
    type: UPDATE_BOTTOM,
    bottom
  }
}
export const updateRight =  (right) => {
  return {
    type: UPDATE_RIGHT,
    right
  }
}

export const updateLeft =  (left) => {
  return {
    type: UPDATE_LEFT,
    left
  }
}


