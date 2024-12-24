import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Card from "../../../Components/Card/Card";
import SectionTitle from "../../../Components/SectionTItle/SectionTitle";
import useVolunteerData from "../../../Hooks/useVolunteerData";
import { Link } from "react-router-dom";


const HomeCardContainer = () => {
    // const axiosSecure = useAxiosSecure();

    // const { data } = useQuery({
    //     queryKey: ['volunteer'],
    //     queryFn: async () => {
    //         const { data } = await axiosSecure.get('/volunteer')
    //         // console.log(data)
    //         return data;

    //     }
    // })
    // console.log(data)
    const {data} = useVolunteerData()
    return (
        <div className="my-24">
            <SectionTitle title={"volunteer need"} subTitle={"volunteer"}/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center">
                {
                    data?.slice(0,6).map(item => <Card key={item._id} item={item} />)
                }
            </div>

          
        </div>
    );
};

export default HomeCardContainer;