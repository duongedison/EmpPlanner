import React from "react";
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Login from "./Login";
import FuncApp from "./FuncApp";
import ProgView from './ProgView';
import Engineer from './Engineer';
// import Tinytable from "./Tinytable";


const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/login/FuncApp" component={FuncApp}/>
            <Route exact path="/login/ProgView" component={ProgView}/>
            <Route exact path="/login/Engineer" component={Engineer}/>
        </Switch>
    </BrowserRouter>
);

export default Router; 