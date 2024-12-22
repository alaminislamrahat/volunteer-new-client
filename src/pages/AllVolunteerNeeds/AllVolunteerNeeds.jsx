import Card from "../../Components/Card/Card";
import useVolunteerData from "../../Hooks/useVolunteerData";


const AllVolunteerNeeds = () => {
    const {data} = useVolunteerData()
    return (
        <div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center">
                {
                    data?.map(item => <Card key={item._id} item={item} />)
                }
            </div>
        </div>
    );
};

export default AllVolunteerNeeds;