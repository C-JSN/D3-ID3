export const SCATTER_PLOT = "SCATTER_PLOT";
export const UPDATE_WIDTH = "UPDATE_WIDTH";

export const getScatterPlot = (payload) => dispatch => {
  dispatch({
    type: SCATTER_PLOT,
    payload: payload
  });
};

// export const updateWidth = (width) => dispatch =>{
//   console.log('')
//   dispatch({
//     type: UPDATE_WIDTH,
//     width
//   });
// }

export const updateWidth =  (width) => {
  return {
    type: UPDATE_WIDTH,
    width
  }
}

