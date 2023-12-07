import { combineReducers } from "redux";
import { transportationDataReducer } from "./TransportationReducer";

export default combineReducers({
  transportationData: transportationDataReducer,
});
