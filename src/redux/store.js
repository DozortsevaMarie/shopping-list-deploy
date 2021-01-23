import {combineReducers, createStore} from "redux";
import loginReducer from "./loginReducer";
import mainPageReducer from "./mainPageReducer";


const redusers = combineReducers({
    loginReducer,
    mainPageReducer,


})
const store = createStore(redusers);

window.store = store;
export default store;
