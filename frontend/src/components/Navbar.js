import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {user_loggedOut} from "../Action/auth";
import {Link, Redirect, useHistory} from "react-router-dom";


const Navbar = () => {
    const authenticate_user = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const history = useHistory();

    const got_to_register = () => {
       let path = "/register";
        history.push(path);
    }

    const login_user = () => (
        <button className="btn btn-outline-success" type="submit" onClick={()=>dispatch(user_loggedOut())}>Logout</button>
    )
    const loggedOut_user = () => {
        return (
            <div>
                <button className="btn btn-outline-success"
                        onClick={got_to_register}>Register</button>

                <button className="btn btn-outline-success" type="submit">Login</button>
            </div>
        )
    }
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand">Mail Automation</a>
                    <form className="d-flex">
                        {/*<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>*/}
                        {authenticate_user.name && authenticate_user.email ? login_user() : loggedOut_user()}

                    </form>


                </div>
            </nav>
        </div>
    )
}

export default Navbar