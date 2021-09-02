import {ADD_ALERT, CLEAR_ALERT, DELETE_ALERT, ERROR_ALERT} from "../Action/types";

const initialState = {
    msg: "",
    status: null,
}

export default function (state = initialState, action) {
    switch (action.type){
        case ADD_ALERT:
            return{
                ...state,
                ...action.payload
            }
        case DELETE_ALERT:
            return {
                ...state,
                ...action.payload
            }
        case ERROR_ALERT:
            return {
                ...state,
                ...action.payload
            }
        case CLEAR_ALERT:
            return {
                msg: [],
                status: null
            }
        default:
            return state
    }
}