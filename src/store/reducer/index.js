import TxReducer from "./TxReducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
   txReducer:TxReducer
})

export default rootReducer
