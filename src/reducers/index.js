import { combineReducers } from 'redux';
import ScatterPlotReducer from './ScatterPlotReducer';
import D3ParserReducer from './D3ParserReducer';

export default combineReducers({
  ScatterPlotReducer,
  D3ParserReducer,
});
