import {combineReducers} from "redux";
import auth from "./auth";
import alert from "./alert";
import email from "./email";


export default combineReducers({
    auth, alert, email
})