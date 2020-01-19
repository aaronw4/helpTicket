import React from 'react';
import {Route, Redirect} from 'react-router-dom';

export const HelperPrivateRoute = ({component: Component, ...theRest}) => {
    return(
        <Route
            {...theRest}
            render = {() => {
                if (localStorage.getItem('token')) {
                return <Component/>
            } else {
                return <Redirect to='/loginHelper'/>
            }
            }}
        />
    )
}

export const StudentPrivateRoute = ({component: Component, ...theRest}) => {
    return(
        <Route
            {...theRest}
            render = {() => {
                if (localStorage.getItem('token')) {
                return <Component/>
            } else {
                return <Redirect to='/loginStudent'/>
            }
            }}
        />
    )
}
