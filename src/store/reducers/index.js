import { USER, USER_SUCCESS, USER_FAILURE } from '../actions/user'
import { RESET_ERROR_MESSAGE } from '../actions/error'

import user from "./user";

import { combineReducers } from "redux";

// Updates error message to notify about the failed fetches.
const errorMessage = (state = null, action) => {
  const { type, error } = action;

  if (type === RESET_ERROR_MESSAGE) {
    return null;
  } else if (error) {
    return error;
  }

  return state;
};

const reducers = combineReducers({
  userReducer: user({
    mapActionToKey: (action) => action.user,
    types: [USER, USER_SUCCESS, USER_FAILURE],
  })
});

const rootReducer = combineReducers({
  reducers,
  errorMessage,
})

export default rootReducer
