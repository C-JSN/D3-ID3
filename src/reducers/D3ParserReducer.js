import { D3_PARSER, UPDATE_VALUE } from '../actions/D3ParserActions';
//import D3ParserObj from '../d3ParserObj';
import fs from 'fs';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case D3_PARSER:
      // return state;
      action.payload = JSON.parse(fs.readFileSync('./src/d3ParserObj.js'));
      return action.payload;
      // return {...state, payload: action.payload}
    case UPDATE_VALUE: {
      return [
        ...state.slice(0, action.i),
        {...state[action.i], value: action.value},
        ...state.slice(action.i + 1)
      ]
    }
    default:
      return state;
  }
}
