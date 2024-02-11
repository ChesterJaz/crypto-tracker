


import { combineReducers } from "redux";
import { coinReducers } from "./coinReducers";


const reducers = combineReducers({
    coinReducers: coinReducers
})

export default reducers;