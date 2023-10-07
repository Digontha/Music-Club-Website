import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Component/Pages/Home/Home";
import About from "../Component/Pages/About/About";
import ServiceDetails from "../Component/Pages/Home/HomeElement/ServiceDetails";
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";
import PrivateRouter from "../Component/PrivateRouter/PrivateRouter";
import Contact from "../Component/Contact/Contact";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:()=>fetch("data.json")

            },
            {
                path:"/:id",
                element:<PrivateRouter><ServiceDetails></ServiceDetails></PrivateRouter>,
                loader:()=>fetch("data.json")
            }
            ,
            {
                path:"/about",
                element:<PrivateRouter><About></About></PrivateRouter>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/contact",
                element:<PrivateRouter><Contact></Contact></PrivateRouter>
            }
        ]
    }
])

export default router