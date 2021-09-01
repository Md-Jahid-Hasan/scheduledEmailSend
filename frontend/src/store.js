import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk";
import rootReducer from './Reducers';

const initialState = {}

export const host = "http://127.0.0.1:8000"

const middleware = [thunk]

const store = createStore(
    rootReducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store
