import { createBrowserRouter } from "react-router-dom";
import Owner from "../pages/owner";
import HomeEnter from "../pages/homeEnter";
/* import Editar from "../pages/Editar.jsx"; */

export const router = createBrowserRouter ([
    {
        path: "/",
        element: <homeEnter/>
    },
    /* {
        path: "/admin",
        element: <admin/>  
    }, 
    {
        path: "/user",
        element: <user/>  
    }, 
    */
        {
        path: "/owner",
        element: <Owner/>  
    },
/*     {
        path: "/guard",
        element: <guard/>  
    }, */
    
    
]);

export default router
