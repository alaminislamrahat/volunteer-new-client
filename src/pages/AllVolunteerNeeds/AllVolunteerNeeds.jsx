import { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";
import SectionTitle from "../../Components/SectionTItle/SectionTitle";

import useAxiosSecure from "../../Hooks/useAxiosSecure";


const AllVolunteerNeeds = () => {
 
    const [search, setSearch] = useState('');
    const [searchText, setSearchText] = useState('');
    const axiosSecure = useAxiosSecure();
    const [allData, setAllData] = useState([])


    useEffect(()=>{
        const getData = async()=>{
            const { data } = await axiosSecure.get(`/volunteer?search=${search}`)
            setAllData(data)
        }
        getData()
       
    },[axiosSecure, search])

    const handleSearch = e => {
        e.preventDefault();
        
        setSearch(searchText)
      }
 console.log(search,searchText)
    return (
        <div>
            <form onSubmit={handleSearch}>
                <div className='flex items-center justify-end p-1 overflow-hidden  rounded-lg mt-3'>
                    <input
                        onChange={e => setSearchText(e.target.value)}
                        className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white  border focus:placeholder-transparent'
                        type='text'
                        name='search'
                        placeholder='Enter Volunteer title'
                        aria-label='Enter Volunteer title'
                    />

                    <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase bg-gradient-to-r from-cyan-500 via-purple-400 to-pink-500 rounded-md hover:bg-gray-600'>
                        Search
                    </button>
                </div>
            </form>
            
            <SectionTitle title={"all volunteer"} subTitle={"volunteer"} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center">
                {
                    allData?.map(item => <Card key={item._id} item={item} />)
                }
            </div>
        </div>
    );
};

export default AllVolunteerNeeds;