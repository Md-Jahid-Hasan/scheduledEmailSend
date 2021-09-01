import {LOGIN_SUCCESS, REGISTRATION_SUCCESS, USER_LOGGEDIN} from "../Action/types";

const initialState = {
    name: "",
    email: "",
    token: localStorage.getItem('access_token'),
    registered: false,
}

export default (state = initialState, action) => {
    switch (action.type){
        case LOGIN_SUCCESS:
            localStorage.setItem('access_token', action.payload.access)
            return{
                ...state,
                ...action.payload,
                token: action.payload.access,
            }
        case REGISTRATION_SUCCESS:
            return {
                registered: true,
            }
        case USER_LOGGEDIN:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}