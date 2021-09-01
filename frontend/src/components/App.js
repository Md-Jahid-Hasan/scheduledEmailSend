import React, {Fragment, useEffect} from "react";
import {Provider, useDispatch} from "react-redux";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom"
import store from "../store";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";
import EmailAdd from "./SendEmail/AddEmail";
import EmailList from "./SendEmail/EmailList";
import PrivateRoute from "./Authentication/PrivateRoute";
import {get_authenticate_user} from "../Action/auth";
import Navbar from "./Navbar";

const App = () => {
    useEffect(()=>(
        store.dispatch(get_authenticate_user())
    ))

    return (
        <Provider store={store}>
            <Navbar/>
           <Router>
                <Fragment>
                    <Switch>
                        <PrivateRoute exact path="/" component={EmailAdd}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/register" component={Register}/>
                        {/*<Route exact path="/send-email" component={EmailAdd}/>*/}
                        <Route exact path="/mail-list" component={EmailList}/>
                    </Switch>
                </Fragment>
            </Router>
        </Provider>
    )
}

export default App