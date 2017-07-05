import { SCATTER_PLOT, UPDATE_WIDTH, UPDATE_HEIGHT, UPDATE_TOP, UPDATE_BOTTOM, UPDATE_RIGHT, UPDATE_LEFT, UPDATE_X_NAME, UPDATE_X_NAME_COLOR, UPDATE_X_TICKS, UPDATE_X_AXIS_COLOR } from '../actions/ScatterPlotActions';
import ScatterPlotObject from '../templates/ScatterPlotObject';

const initialState = {
  margin: {},
  width: '',
  height: '',
  responsiveResize: '',
  axes: {},
  gridLines: {},
  regressionLine: {},
  toolTip: {},
  scatterPlot: {},
  data: []
}

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case SCATTER_PLOT:
    // console.log('inside action', action.payload);
      // return state;
      return action.payload;
      // return {...state, payload: action.payload}
    case UPDATE_WIDTH:
      return {
        ...state, width: action.width
      }
    case UPDATE_HEIGHT:
      return {
        ...state, height: action.height
      }
    case UPDATE_TOP:
      return {
        ...state, 
        margin: {
          ...state.margin, top:action.top
        } 
      }
    case UPDATE_BOTTOM:
    return {
      ...state, 
      margin: {
        ...state.margin, bottom:action.bottom
      } 
    }
    case UPDATE_RIGHT:
    return {
      ...state, 
      margin: {
        ...state.margin, right:action.right
      } 
    }
    case UPDATE_LEFT:
    return {
      ...state, 
      margin: {
        ...state.margin, left:action.left
      } 
    }
    case UPDATE_X_NAME:
    return {
      ...state,
      axes: {
        ...state.axes,
        xAxis:{
          ...state.axes.xAxis, name: action.xName
        }
      }
    }
    case UPDATE_X_NAME_COLOR:
    return {
      ...state,
      axes: {
        ...state.axes,
        xAxis:{
          ...state.axes.xAxis, nameColor: action.xNameColor
        }
      }
    }

    case UPDATE_X_TICKS:
    return {
      ...state,
      axes: {
        ...state.axes,
        xAxis: {
          ...state.axes.xAxis, ticks: action.xTicks
        }
      }
      
    }
    case UPDATE_X_AXIS_COLOR:
    return {
      ...state, 
      axes: {
        ...state.axes,
        xAxis: {
          ...state.axes.xAxis, axisColor: action.color
        }
      }
    }

    default:
      return state;
  }
}
