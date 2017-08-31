import { combineReducers } from 'redux';
import ScatterPlotReducer from './ScatterPlotReducer';
import D3ParserReducer from './D3ParserReducer';
import projectTypeReducer from './ProjectTypeReducer';

export default combineReducers({
  ScatterPlotReducer,
  D3ParserReducer,
  projectType: projectTypeReducer,
});
