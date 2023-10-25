import Prueba from "../components/Prueba";
import Layout from "../layout/Layout";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path:"/",
                element: <Prueba/>
            },
        ]
    }
]);