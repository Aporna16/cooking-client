import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Chef from "../Pages/Home/chef/Chef";
import FoodTrends from "../layouts/FoodTrends"
import Foods from "../Pages/Trending/Foods/Foods"
import LoginLayout from "../layouts/LoginLayout";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../Pages/Shared/Terms/Terms";


const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to="/chef/0"></Navigate>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path:'terms',
                element:<Terms></Terms>
            }
        ]
    },
    {
        path: 'chef',
        element: <Main></Main>,
        children: [
            {
                path: ':id',
                element: <Chef></Chef>,
                loader: ({ params }) => fetch(`https://chef-cooking-server.vercel.app/chefs/${params.id}`)
            }
        ]

    },
    {
        path: 'food',
        element: <FoodTrends></FoodTrends>,
        children: [
            {
                path: ':id',
                element: <PrivateRoute><Foods></Foods></PrivateRoute>,
                loader: ({ params }) => fetch(`https://chef-cooking-server.vercel.app/chef/${params.id}`)

            }
        ]

    },
    
    
])

export default router;