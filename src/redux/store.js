import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// import { productsReducer } from "./products/products.reducer";
import { meReducer } from "./me/me.reducer";

const rootReducer = combineReducers({
    me: meReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;