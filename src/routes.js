import React from 'react';
import {Route,BrowserRouter} from "react-router-dom";
import Home from './pages/Home/index';
import Weather from './pages/Weather/index';
const Routes = () =>{
    return(
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={Weather} path="/weather"/>
        </BrowserRouter>
    );
}

export default Routes;