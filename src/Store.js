import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import todoReducer from "./services/reducer/todoReducer";

const store = createStore(todoReducer, applyMiddleware(thunk));

export default store;
