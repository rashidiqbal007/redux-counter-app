// HOW TO DO IT? CONTAINS ACTION + STATE  
// ROOT REDUCER FILE + PASS TO STORE
import ChangeTheNumber from "./upDown";
import { combineReducers } from "redux";


const rootReducer = combineReducers({
    ChangeTheNumber
});



export default rootReducer;