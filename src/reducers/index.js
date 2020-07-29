import { combineReducers } from "redux";
import settings from "./settings";
import photos from "./photos";

export default combineReducers({
  settings,
  photos,
});
