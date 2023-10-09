import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home/Home";
import Root from "../layout/Root";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/errorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";

import ServiceDetailes from "../pages/serviceDetails/ServiceDetailes";
import Blog from "../pages/blog/Blog";
import AllServices from "../pages/all services/AllServices";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch('/trstimonial.json')

            },
            {
                path: "/service/:id",
                element: <PrivateRoute><ServiceDetailes /></PrivateRoute>,
                loader: () => fetch(`/services.json`)
            },


            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/blog",
                element: <PrivateRoute><Blog></Blog></PrivateRoute>
            },
            {
                path: "/allservices",
                element: <PrivateRoute> <AllServices></AllServices></PrivateRoute>
            }


        ]
    },
]);

export default router;