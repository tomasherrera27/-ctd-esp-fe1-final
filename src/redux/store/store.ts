import { combineReducers, createStore, applyMiddleware } from "@reduxjs/toolkit";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import mainReducer from "./reducers/main.reducer"

import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from "react-redux";

const rootReducer = combineReducers({
  characters: mainReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;

// Tipamos el hook useSelector
export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;

const store = createStore(
  rootReducer, composeWithDevTools(applyMiddleware(thunk))
);
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
