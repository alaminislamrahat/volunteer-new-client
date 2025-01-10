import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import useAuth from "../Hooks/useAuth";


const Root = () => {
    const {
        isDarkMode} = useAuth();
    return (
        <div className={`${isDarkMode ?'bg-[#080d0b] text-white' : 'bg-[#F8F9FA] text-[#000000]'}`}>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;