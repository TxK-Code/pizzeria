import { createStore, applyMiddleware, combineReducers } from "redux";

import pizzaReducer from "./articles/pizzaReducer";
import boissonReducer from "./articles/boissonReducer";
import dessertReducer from "./articles/dessertReducer";

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  pizzaReducer,
  boissonReducer,
  dessertReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
