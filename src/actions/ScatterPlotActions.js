export const SCATTER_PLOT = "SCATTER_PLOT";

export const getScatterPlot = (payload) => dispatch => {
  dispatch({
    type: SCATTER_PLOT,
    payload: payload
  });
};
