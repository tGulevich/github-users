import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import reposReducer from "./reposReducer";
import userReducer from './userReducer'
import ReduxThunk from "redux-thunk";

const rootReducer = combineReducers({
  user: userReducer,
  repos: reposReducer,
});

export const store = createStore(rootReducer, applyMiddleware(ReduxThunk));