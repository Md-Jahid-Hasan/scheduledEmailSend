import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {register_user} from "../../Action/auth";
import {Redirect} from "react-router-dom";


const Login = () => {
    const [registerData, setRegisterData] = useState({email: "", name: "", password: "", verify_password: ""})
    const dispatch = useDispatch()
    const is_registered = useSelector((state) => state.auth.registered)

    if (is_registered)
        return <Redirect to="/login"/>

    const getLoginData = (event) => {
        event.preventDefault()
        //console.log(registerData)
        dispatch(register_user(registerData))
    }


    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-10 col-md-6 mt-3">
                    <form onSubmit={getLoginData}>

                        <div className="mb-3 row">
                            <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control" value={registerData.email}
                                       placeholder="Enter you university email"
                                       onChange={(e) => setRegisterData(
                                           {...registerData, email: e.target.value})}/>
                            </div>

                        </div>

                        <div className="mb-3 row">
                            <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" value={registerData.name}
                                       onChange={(e) => setRegisterData(
                                           {...registerData, name: e.target.value})}/>
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" value={registerData.password}
                                       onChange={(e) => setRegisterData(
                                           {...registerData, password: e.target.value})}/>
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label htmlFor="password" className="col-sm-2 col-form-label">Verify Password</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" value={registerData.verify_password}
                                       onChange={(e) => setRegisterData(
                                           {...registerData, verify_password: e.target.value})}/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="row m-2 d-md-flex justify-content-center">
                                <button type="submit" className="btn btn-primary col-8">Register</button>
                            </div>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    )
}

export default Login