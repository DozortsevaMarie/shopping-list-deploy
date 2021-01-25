import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import loginReducer from "./loginReducer";
import mainPageReducer from "./mainPageReducer";
import thunkMiddleware from "redux-thunk";


const reducers = combineReducers({
    loginReducer,
    mainPageReducer,


})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)
));

window.store = store;
export default store;
