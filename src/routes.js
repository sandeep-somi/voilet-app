import React from 'react';
import { NativeRouter, Route } from "react-router-native";
import LandingPage from './LandingPage/index';
import SignIn from './SignIn/index';
import WelcomePage from './WelcomePage/index';
import Home from './Home/index';

export default function Routes (props) {    
    return (
        <NativeRouter>
            <Route exact path="/" component={LandingPage} />
            <Route path="/signin" component={SignIn} />
            <Route path="/welcome" component={WelcomePage} />
            <Route path="/home" component={Home} />
        </NativeRouter>
    )
}