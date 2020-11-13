import { combineReducers } from "redux";
import appReducer from "./app";

//создает root reducer
const rootReducer = combineReducers({
  app: appReducer,
});

export default rootReducer;
