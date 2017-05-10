import { SCATTER_PLOT } from '../actions/ScatterPlotActions';

export default function reducer(state = {}, action) {
  // console.log('action payload', action.payload);
  console.log('REDUCER CALLED!');
  switch (action.type) {
    case SCATTER_PLOT:
      return { ...state, SCATTER_PLOT: action.payload }
    default:
      return state;
  }
}
