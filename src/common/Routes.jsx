import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Login from '../components/Login';
import Browse from '../components/Browse';

const Routes = () => {
    return createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        },
        {
            path: "/login",
            element: <Login />
        }
    ]);

    // return routes;
}

export default Routes