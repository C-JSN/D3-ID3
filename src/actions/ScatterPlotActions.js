export const SCATTER_PLOT = "SCATTER_PLOT";
export const UPDATE_WIDTH = "UPDATE_WIDTH";
export const UPDATE_HEIGHT = "UPDATE_HEIGHT";

export const getScatterPlot = (payload) => dispatch => {
  console.log('get scatter plot action');
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

