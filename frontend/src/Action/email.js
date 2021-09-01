import axios from "axios";
import {getHeader} from "./auth";
import {host} from "../store";

export const get_authenticate_user = (mail_data) => (dispatch, getState) => {
    axios.post(`${host}/email/api/notification-add/`,mail_data, getHeader(getState))
        .then(res => {
            console.log(res.data)
        })
        .catch(err => console.log(err))
}