import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Card from "../../../Components/Card/Card";
import SectionTitle from "../../../Components/SectionTItle/SectionTitle";
import useVolunteerData from "../../../Hooks/useVolunteerData";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";


const HomeCardContainer = () => {
  
    const {
        isDarkMode} = useAuth();

    const {data} = useVolunteerData()
    return (
        <div className={`my-24 ${isDarkMode ? '' : ''}`}>
           <h1 className="text-center text-3xl font-bold mb-10">Volunteer Need</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-5 justify-center items-center">
                {
                    data?.slice(0,6).map(item => <Card key={item._id} item={item} />)
                }
            </div>

          
        </div>
    );
};

export default HomeCardContainer;