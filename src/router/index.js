import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Menu from "../pages/Menu";



export const router = createBrowserRouter([

        {
        path: '/',
        element: <Login/>,
        
        },
        {
        path: '/menu',
        element: <Menu/>,
                
        },
        
], { basename: '/gigaflop-pp3-app-react' }); 