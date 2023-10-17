import { createBrowserRouter } from "react-router-dom";
import homeEnter from "../pages/homeEnter"
/*/import Owner from "../pages/owner";
/* import Editar from "../pages/Editar.jsx"; */

export const router = createBrowserRouter ([
   {
        path: "/",
        element: <homeEnter/>
    },
    /*
    {



































        path: "/admin",
        element: <admin/>  
    }, 
    {
        path: "/user",
        element: <user/>  
    }, 
        {
        path: "/owner",
        element: <Owner/>  
    },
   {
        path: "/guard",
        element: <guard/>  
    }, */
    
    
]);

