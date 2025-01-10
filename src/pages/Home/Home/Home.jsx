import { Link } from "react-router-dom";
import Caurosel from "../Caurosel/Caurosel";
import HomeCardContainer from "../HomeCardContainer/HomeCardContainer";
import useAuth from "../../../Hooks/useAuth";
// import AboutUs from "../AboutUs/AboutUs";
// import FeaturedVolunteerOpportunities from "../FeaturedVolunteerOpportunities/FeaturedVolunteerOpportunities";
import Services from "../Sevices/Sevices";
import Cover from "./Cover/Cover";
import Banner from "./Banner/Banner";
import PreserveNature from '../preservenature/preservenature'

import Gallery from "../Gallery/Gallery";
import ContactUs from "../ContactUs/ContactUs";


const Home = () => {
    const {
        isDarkMode
        } = useAuth();
    return (
        <div className={`${isDarkMode ? 'bg-slate-950 text-white' : ''}`}>
            <Caurosel />
            <Services/>
            <Cover img={"https://i.ibb.co/DWJXtfK/ocg-saving-the-ocean-1j7-atc0z8-unsplash-1.jpg"}/>

            <HomeCardContainer />
            <div className="flex justify-center items-center mb-20">
                <Link to="/all-volunteer-needs">
                    <button className="btn bg-[#E5B561] text-white">See All</button>
                </Link>

            </div>
            <Banner/>
           <PreserveNature/>
           {/* <DonationCards/> */}
           <Gallery/>
           <ContactUs/>
           
            
        </div>
    );
};

export default Home;