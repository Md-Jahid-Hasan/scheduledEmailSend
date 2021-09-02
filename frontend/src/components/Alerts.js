import React, {useState, useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {clear_alert} from "../Action/email";

const Alerts = () => {
    const loaded = useRef(false)
    const dispatch = useDispatch()
    const [show, setShow] = useState(false)
    const message = useSelector((state) => state.alert)
    const [alert_type, setAlert_Type] = useState({msg:"", status:null})
    useEffect(() =>{
        if (show === true){
            dispatch(clear_alert())
        }
    }, [show])

    useEffect(() => {
        if (loaded.current) {
            if (message) {
                setAlert_Type({...alert_type, ...message})
                setShow(true)

                const timer = setInterval(() => setShow(false), 5000)
                return () => clearInterval(timer)
            } else{
                setShow(false)
            }
        } else{
            loaded.current = true
        }
    }, [message])

    console.log(alert_type)

    const alertBox =() => (
        <div className={alert_type.status === 200 ? "alert alert-success": "alert alert-danger"} role="alert">
            {alert_type.msg}
        </div>
    )

    return(
        <div>
            {show && alert_type.status && alertBox()}
        </div>
    )
}

export default Alerts