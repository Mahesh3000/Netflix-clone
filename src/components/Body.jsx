import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import ErrorComponent from "../common/ErrorComponent";

const Body = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <ErrorComponent />,
    },
    {
      path: "home",
      element: <Browse />,
      errorElement: <ErrorComponent />,
    },
    {
      path: "/browse",
      element: <Browse />,
      
    },
    {
      path: "/login",
      element: <Login />,

      errorElement: <ErrorComponent />,
    },
  ]);
  return (
    <RouterProvider router={routes}>
      <Outlet />
    </RouterProvider>
  );
};

export default Body;
