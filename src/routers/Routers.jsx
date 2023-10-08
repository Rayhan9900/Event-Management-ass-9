import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home/Home";
import Root from "../layout/Root";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/errorPage/ErrorPage";
import ServiceDetailes from "../pages/serviceDetails/ServiceDetailes";
import PrivateRoute from "./PrivateRoute";
import Order from "../pages/order/Order";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch('/instructor.json')
            },
            {
                path: "/service/:id",
                element: <PrivateRoute> <ServiceDetailes /></PrivateRoute>,
                loader: () => fetch('/services.json')
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
                path: "/order",
                element: <PrivateRoute><Order /></PrivateRoute>
            }


        ]
    },
]);

export default router;