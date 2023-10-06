import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Component/Pages/Home/Home";
import About from "../Component/Pages/About/About";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:()=>fetch("data.json")

            }
            ,
            {
                path:"/about",
                element:<About></About>
            }
        ]
    }
])

export default router