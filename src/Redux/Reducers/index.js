import { combineReducers } from "redux";
import toDoReducer from "./TodoReducer";

const rootReducer = combineReducers({
    ToDo: toDoReducer,
});

export default rootReducer;
