import React from "react";
import { useRoutes } from "react-router-dom";
import Groups from "./Body";
import Register from "./Register";

const RouterController = () => {
  return useRoutes([
    {
      path: "/",
      element: <Groups />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
};

export default RouterController;
