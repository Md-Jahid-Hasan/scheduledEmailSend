import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {login_user} from "../../Action/auth";
import {Redirect} from "react-router-dom";


const Login = () => {
    const [loginData, setLoginData] = useState({email:"", password:""})
    const dispatch = useDispatch()
    const authenticate_user = useSelector((state) => state.auth)

    if(authenticate_user.name && authenticate_user.email)
        return <Redirect to="/"/>


    const getLoginData = (event) => {
        event.preventDefault()
        console.log(loginData)
        dispatch(login_user(loginData))
    }


    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-10 col-md-6 mt-3">
                    <form onSubmit={getLoginData}>

                        <div className="mb-3 row">
                            <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control" value={loginData.email}
                                      placeholder="Enter you university email"
                                       onChange={(e) => setLoginData(
                                           {...loginData, email: e.target.value})}/>
                                    <div className="invalid-feedback">
                                        Something
                                    </div>
                            </div>

                        </div>

                        <div className="mb-3 row">
                            <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" value={loginData.password}
                                       onChange={(e) => setLoginData(
                                           {...loginData, password: e.target.value})}/>
                            </div>
                        </div>

                        <div className="row">

                            <div className="row m-2 gap-2 d-md-flex justify-content-center">
                                <button type="submit" className="btn btn-primary col-4">Login</button>
                            </div>

                            <div className="row m-2 d-md-flex justify-content-center">
                                <a className="btn btn-primary col-8">Register</a>
                            </div>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    )
}

export default Login