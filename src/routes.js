import React from 'react';
import { NativeRouter, Route } from "react-router-native";
import LandingPage from './LandingPage/index';
import SignIn from './SignIn/index';
import WelcomePage from './WelcomePage/index';
import Home from './Home/index';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function (props) {
    return (
        <NavigationContainer>
            <Routes />
        </NavigationContainer>
    )
}

function Routes() {
    return (
        <NativeRouter>
            <Stack.Navigator initialRouteName="LandingPage">
                <Stack.Screen options={{ headerShown: false }} name="LandingPage" component={LandingPage} />
                <Stack.Screen options={{ headerShown: false }} name="SignIn" component={SignIn} />
                <Stack.Screen options={{ headerShown: false }} name="WelcomePage" component={WelcomePage} />
                <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
            </Stack.Navigator>
        </NativeRouter>
    )
}