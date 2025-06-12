import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Menu from "../pages/Menu";
import Clientes from "../pages/Clientes";



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
        path: '/clientes',
        element: <Clientes/>,
                        
        },
        
], { basename: '/gigaflop-pp3-app-react' }); 