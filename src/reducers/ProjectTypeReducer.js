import  { TEMPLATE, USER_CODE } from '../actions/ProjectTypeActions';

export default function projectTypeReducer(state=null, action) {
  switch(action.type) {
    case TEMPLATE:
      return action.template;
    case USER_CODE:
      return action.userCode;
    default:
      return state;
  };
}