import React from "react";
import { createBrowserRouter, redirect } from "react-router-dom";
import HomePages from "./pages/HomePages";

const router = createBrowserRouter([
   
    {
        path: "/",
        element: <HomePages />,
    },
    {
        path: "/:search",
        element: <HomePages />,
    },
   
]);

export default router;
