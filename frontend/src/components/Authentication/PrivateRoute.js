import React from "react";
import {Route, Redirect} from "react-router-dom";
import {useSelector} from "react-redux";

const PrivateRoute = ({component: Component, ...rest}) => {
    const auth = useSelector(state => state.auth)

    let isAuthenticated = false
    if(auth.name && auth.email)
        isAuthenticated = true

    return (
    <div>
        <Route {...rest} render={
            props => {
                if(!isAuthenticated){
                    return <Redirect to="/login"/>
                }else{
                    return <Component {...props}/>
                }
            }
        }/>
    </div>
    )
}

export default PrivateRoute