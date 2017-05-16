import { SCATTER_PLOT } from '../actions/ScatterPlotActions';
import ScatterPlotObject from '../templates/ScatterPlotObject';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SCATTER_PLOT:
      // return state;
      return action.payload;
      // return {...state, payload: action.payload}
    default:
      return state;
  }
}
