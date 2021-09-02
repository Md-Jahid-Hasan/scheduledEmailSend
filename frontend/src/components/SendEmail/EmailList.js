import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import email from "../../Reducers/email";
import {get_user_all_mail} from "../../Action/email";


const EmailList = () => {
    const [mails, setMails] = useState([])
    const mail = useSelector((state) => state.email.email)
    const dispatch = useDispatch()

    console.log(mail)
    useEffect(() => {
        dispatch(get_user_all_mail())
    }, [])

    useEffect(() =>{
        if(mail !== undefined)
            setMails(mail)
    }, [mail])

    const show_mail = () => (
        mail.map((each, index) => (
            <tr key={index}>
                <th scope="row">each.</th>
                <td>105</td>
                <td>$15,000.00</td>
                <td>$15,000.00</td>
            </tr>
        ))
    )

    return (
        <div className="container">
            <h3>Bootstrap 4 table with borders</h3>
            <table className="table table-bordered table-striped table-hover">
                <thead>
                <tr>
                    <th>Subject</th>
                    <th>Body</th>
                    <th>Emails</th>
                    <th>Scheduled Time</th>
                </tr>
                </thead>
                <tbody>
                {mails.map((each, index) => (
                    <tr key={index}>
                        <th scope="row">{each.subject}</th>
                        <td>{each.body}</td>
                        <td>{each.email}</td>
                        <td>{each.send_time}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default EmailList