import { Link } from "react-router-dom";
import Caurosel from "../Caurosel/Caurosel";
import HomeCardContainer from "../HomeCardContainer/HomeCardContainer";
import useAuth from "../../../Hooks/useAuth";


const Home = () => {
    const {setDarkMode,
        isDarkMode,
        toggleDarkMode} = useAuth();
    return (
        <div className={`${isDarkMode ? 'bg-slate-950 text-white' : 'bg-white'}`}>
            <Caurosel />
            <HomeCardContainer />
            <div className="flex justify-center items-center my-7">
                <Link to="/all-volunteer-needs">
                    <button className="btn btn-primary mx-auto">See All</button>
                </Link>

            </div>
        </div>
    );
};

export default Home;