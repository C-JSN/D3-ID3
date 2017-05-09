import { SCATTER_PLOT } from '../actions/ScatterPlotReducer';

export default function reducer(state = {}, action) {
  switch (action.type) {
    case SCATTER_PLOT: {
      return {action.payload, ...state}
    }
  }
}
