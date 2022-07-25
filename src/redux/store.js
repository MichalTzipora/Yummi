import { applyMiddleware, createStore,combineReducers } from "redux";
import {userReducer} from './reducer/user'
import {recipeReducer} from './reducer/recipe'

const logAction=(store)=>(next)=>(action)=>{
    console.log(action.type);
    return next(action);
 }
 const reducer = combineReducers({userReducer,recipeReducer});

 const store=createStore(reducer,applyMiddleware(logAction));

window.store = store;
export default store;
