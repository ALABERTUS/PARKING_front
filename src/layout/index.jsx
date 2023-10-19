import { createBrowserRouter } from "react-router-dom";
import HomeEnter from "../pages/HomeEnter"
import Admin from "../pages/admin";
import User from "../pages/User";
import Owner from "../pages/owner";
import Guard from "../pages/Guard";
import RequestReservation from "../pages/RequestReservation";
import Reservation from "../pages/Reservation";

import Login from "../Components/Login"
import Register from "../Components/Register";



export const router = createBrowserRouter ([
    {
        path: "/",
        element: <Login/>
    },
   {
        path: "/homeEnter",
        element: <HomeEnter/>
    },
    {
        path: "/admin",
        element: <Admin/>  
    }, 
    {
        path: "/user",
        element: <User/>  
    }, 
        {
        path: "/owner",
        element: <Owner/>  
    },
   {
        path: "/guard",
        element: <Guard/>  
    },
    {
        path: "/register",
        element: <Register/>  
    },
    {
        path: "/requestReservation",
        element: <RequestReservation/>  
    },
    {
        path: "/reservation",
        element: <Reservation/>  
    }
    
]);

