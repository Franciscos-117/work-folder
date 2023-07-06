
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from '../components/Navbar';
import Home from "../App";

const Router = () => {
    return (
        <div className="container">
            <Navbar/>
            {/* <Switch>
                <Route path={"/"} component={Home} />
                <Redirect to={"/"} />
            </Switch> */}
        </div>
    );
}

export default Router