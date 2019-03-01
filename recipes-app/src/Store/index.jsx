import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { postReducer } from "../Reducers/postReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  postReducer,
  composeEnhancers(applyMiddleware(thunk))
);
