// NOTE: use this store variable to create a store.
import { legacy_createStore,combineReducers,applyMiddleware } from "redux";
import {reducer as AuthReducer} from "./AuthReducer/reducer"


import  thunk from  "redux-thunk"

const rootReducer = combineReducers({AuthReducer})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks

