import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const Body = () => {
    const routes = createBrowserRouter([
        {
            path:"/",
            element: <Login/>
        },
        {
            path:"/browse",
            element: <Browse/>
        },
        {
            path:"/login",
            element: <Login/>
        }
    ]);
  return (
    <RouterProvider router={routes}>
     
    </RouterProvider>
  )
}

export default Body