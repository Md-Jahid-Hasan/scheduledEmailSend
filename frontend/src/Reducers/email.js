import {GET_EMAIL} from "../Action/types";

const initialState = {
    email: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_EMAIL:
            return {
                ...state,
                email: action.payload
            }
        default:
            return {
                state
            }

    }
}