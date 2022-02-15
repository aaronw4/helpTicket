import React from 'react';
import {Route, Navigate} from 'react-router-dom';

export const HelperPrivateRoute = ({component: Component, ...theRest}) => {
    return(
        <Route
            {...theRest}
            render = {() => {
                if (localStorage.getItem('token')) {
                return <Component/>
            } else {
                return <Navigate to='/loginHelper'/>
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
                return <Navigate to='/loginStudent'/>
            }
            }}
        />
    )
}
