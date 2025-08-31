import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Menu from "../pages/Menu";
import Clientes from "../pages/Clientes";
import Home from "../pages/Home";
import Productos from "../pages/Productos";
import Configuracion from "../pages/Configuracion";



export const router = createBrowserRouter([

         {
        path: '/home',
        element: <Home/>,
        
        },

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
        {
        path: '/productos',
        element: <Productos/>,
                        
        },
        {
        path: '/configuracion',
        element: <Configuracion/>,
                        
        },
        
], { basename: '/gigaflop-pp3-app-react' }); 