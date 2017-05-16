export const D3_PARSER = "D3_PARSER";
export const UPDATE_VALUE = "UPDATE_VALUE";

export const getD3ParserObj = (payload) => dispatch => {
  dispatch({
    type: D3_PARSER,
    payload
  });
};

export const updateValue = (i, value) => {
  return {
    type: UPDATE_VALUE,
    value,
    i
  }
}