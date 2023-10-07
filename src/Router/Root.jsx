import { Outlet } from "react-router-dom";
import Navbar from "../Component/Pages/Home/HomeElement/Navbar";


const Root = () => {
    return (
        <div className="w-[80%]  mx-auto">
            <Navbar></Navbar>
            <div>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;