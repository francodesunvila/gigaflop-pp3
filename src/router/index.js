import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Menu from "../pages/Menu";
import Cotizacion from "../pages/Cotizacion";



export const router = createBrowserRouter([

        {
        path: '/',
        element: <Login/>,
        
        },
        {
        path: '/menu',
        element: <Menu/>,
                
        },
        {
        path: '/cotizacion',
        element: <Cotizacion/>,
                        
        },
        
], { basename: '/gigaflop-pp3-app-react' }); 