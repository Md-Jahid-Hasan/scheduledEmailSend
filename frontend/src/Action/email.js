import axios from "axios";
import {getHeader} from "./auth";
import {host} from "../store";
import {ADD_ALERT, ERROR_ALERT, GET_EMAIL} from "./types";

export const set_schedule_mail = (mail_data) => (dispatch, getState) => {
    axios.post(`${host}/email/api/notification-add/`, mail_data, getHeader(getState))
        .then(res => {
            console.log(res.data)
            const message = {
                msg: "Successfully Save",
                status: 200
            }
            dispatch({
                type: ADD_ALERT,
                payload: message
            })
        })
        .catch(err => {
            console.log(err)
            bad_alert(dispatch)
        })
}

export const get_user_all_mail  = () => (dispatch, getState) =>{
    axios.get(`${host}/email/api/email-list/`, getHeader(getState))
        .then(res => {
            //console.log(res.data)
            dispatch({
                type:GET_EMAIL,
                payload:res.data
            })

            const message = {
                msg: "Successfully Save",
                status: 200
            }
            dispatch({
                type: ADD_ALERT,
                payload: message
            })
        })
        .catch(err => {
            console.log(err)
            bad_alert(dispatch)
        })
}

export const bad_alert = (dispatch) => {
    const message = {
        msg: "Something Wrong",
        status: 400
    }
    dispatch({
        type: ERROR_ALERT,
        payload: message
    })
}

export const clear_alert = ()=> (dispatch) => {
    dispatch({
        type: ERROR_ALERT,
        payload: null
    })
}