import axios from "axios";
import Cookies from 'js-cookie'
import {LOGIN_SUCCESS, REGISTRATION_SUCCESS, USER_LOGGEDIN} from "./types";
import {host} from "../store";
import {Redirect} from "react-router-dom";
import React from "react";


export const getHeader = (getState) => {
    //Get Token from state
    const token = getState().auth.token
    console.log("Token" ,token)

    //Header of request
    const csrftoken = Cookies.get('csrftoken');

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken
        }
    }

    //IF token exists they add to the header
    if (token){
        config.headers['Authorization'] = "JWT " + token
    }
    return config
}


export const login_user = (login_data) => (dispatch, getState) => {
    axios.post(`${host}/api/login/`, login_data, getHeader(getState))
        .then(res => {
            console.log(res.data)
            dispatch({
                type: LOGIN_SUCCESS,
                payload:res.data
            })
        })
        .catch(err => console.log(err))
}

export const register_user = (user_data) => (dispatch) => {
    axios.post(`${host}/api/register/`, user_data)
        .then(res => {
            console.log(res.data)

            dispatch({
                type: REGISTRATION_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}

export const get_authenticate_user = () => (dispatch, getState) => {
    axios.get(`${host}/api/me/`, getHeader(getState))
        .then(res => {
            dispatch({
                type: USER_LOGGEDIN,
                payload: res.data
            })
        })
        .catch(err => console.log(err.data))
}