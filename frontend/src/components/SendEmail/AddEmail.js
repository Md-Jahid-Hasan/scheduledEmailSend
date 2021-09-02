import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {set_schedule_mail} from "../../Action/email";
import {Link, Redirect} from "react-router-dom";



const EmailAdd = () => {
    const [mailData, setMailData] = useState({email: "", subject: "", body: "", send_time: ""})
    const dispatch = useDispatch()
    const is_authenticated = useSelector((state) => state.auth)

    if(!is_authenticated.name && !is_authenticated.email)
        return <Redirect to={"/login"}/>


    const createScheduledMail = (event) => {
        event.preventDefault()
        //console.log("data", mailData)
        dispatch(set_schedule_mail(mailData))
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-10 col-md-6 mt-3">
                    <form onSubmit={createScheduledMail}>

                        <div className="mb-3 row">
                            <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" value={mailData.email}
                                       placeholder="Enter you university email"
                                       onChange={(e) => setMailData(
                                           {...mailData, email: e.target.value})}/>
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label htmlFor="name" className="col-sm-2 col-form-label">Subject</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" value={mailData.subject}
                                       onChange={(e) => setMailData(
                                           {...mailData, subject: e.target.value})}/>
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label htmlFor="password" className="col-sm-2 col-form-label">Body</label>
                            <div className="col-sm-10">
                                <textarea type="password" className="form-control" value={mailData.body}
                                          onChange={(e) => setMailData(
                                              {...mailData, body: e.target.value})}/>
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label htmlFor="password" className="col-sm-2 col-form-label">Sending Time</label>
                            <div className="col-sm-10">
                                <input type="datetime-local" className="form-control" value={mailData.send_time}
                                       onChange={(e) => setMailData(
                                           {...mailData, send_time: e.target.value})}/>
                            </div>
                        </div>


                        <div className="row">
                            <div className="row m-2 d-md-flex justify-content-center">
                                <button type="submit" className="btn btn-primary col-6 m-1">Save Email</button>
                                <Link to="/mail-list" className="btn btn-primary col-4 m-1">Email List</Link>
                            </div>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    )
}

export default EmailAdd