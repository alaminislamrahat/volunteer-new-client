import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import useAuth from "../Hooks/useAuth";


const Root = () => {
    const {setDarkMode,
        isDarkMode,
        toggleDarkMode} = useAuth();
    return (
        <div className={`${isDarkMode ?'bg-slate-950 text-white' : 'bg-white text-black'}`}>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;