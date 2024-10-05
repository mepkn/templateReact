import { apiSlice } from "@/services/services";
import { combineReducers } from "redux";
import { counterReducer } from "./counter/counterSlice";

export const rootReducer = combineReducers({
  counter: counterReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});
