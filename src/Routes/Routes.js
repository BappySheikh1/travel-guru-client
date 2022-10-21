import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from '../Pages/Home/Home'
import Login from '../Pages/Login/Login'
import Register from '../Pages/Register/Register'
import Booking from '../Pages/Booking/Booking'


export const router=createBrowserRouter([
    {
     path:'/',
     element:<Main />,
     children:[
        {
            path:'/',
            element:<Home />
        },
        {
            path:'/home',
            element:<Home />
        },
        {
            path:'/login',
            element:<Login />
        },
        {
            path:'/register',
            element:<Register />
        },
        {
            path:'/booking',
            element:<Booking />
        },
       
     ]
    }
])