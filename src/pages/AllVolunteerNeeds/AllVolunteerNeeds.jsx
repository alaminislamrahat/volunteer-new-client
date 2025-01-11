import { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";
import SectionTitle from "../../Components/SectionTItle/SectionTitle";

import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { MdFormatAlignJustify } from "react-icons/md";
import { LiaTableSolid } from "react-icons/lia";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";


const AllVolunteerNeeds = () => {

    const [search, setSearch] = useState('');
    const [searchText, setSearchText] = useState('');
    const axiosSecure = useAxiosSecure();
    const [allData, setAllData] = useState([])
    const [foramte, setFormate] = useState('card')

    const { isDarkMode } = useAuth()


    useEffect(() => {
        const getData = async () => {
            const { data } = await axiosSecure.get(`/volunteer?search=${search}`)
            setAllData(data)
        }
        getData()

    }, [axiosSecure, search])

    const handleSearch = e => {
        e.preventDefault();

        setSearch(searchText)
    }
    console.log(search, searchText)

    return (
        <div className="pt-24 container mx-auto pb-7 overflow-x-hidden">
            <form onSubmit={handleSearch}>
                <div className='flex flex-col md:flex-row items-center gap-6 justify-end p-1 overflow-hidden  rounded-lg '>

                    <div className="flex gap-6">
                        
                    <button
                        onClick={() => setFormate('card')}
                    ><LiaTableSolid size={40} /></button>
                    <button
                        onClick={() => setFormate('table')}
                    ><MdFormatAlignJustify size={30} /></button>
                    </div>

                    <div className="flex">
                        <input
                            onChange={e => setSearchText(e.target.value)}
                            className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white  border focus:placeholder-transparent'
                            type='text'
                            name='search'
                            placeholder='Enter Volunteer title'
                            aria-label='Enter Volunteer title'
                        />

                        <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase bg-[#4E896D] rounded-md hover:bg-gray-600'>
                            Search
                        </button>
                    </div>
                </div>
            </form>

          <h1 className="text-5xl font-bold text-[#4E896D] text-center mt-10 mb-20"> All Vounteer Need</h1>

            {/* card */}
            {
                foramte == 'card' &&
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-5 justify-center items-center">
                    {
                        allData?.map(item => <Card key={item._id} item={item} />)
                    }
                </div>}


            {/* table */}
            {
                foramte == 'table' &&
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className={`${isDarkMode && 'text-white'}`}>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Thumbnail</th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Deadline</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allData.map((item, idx) => <tr key={item._id}>
                                    <th>
                                        {idx + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={item.thumbnail}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        {
                                            item.postTitle
                                        }
                                    </td>
                                    <td>
                                        {
                                            item.category
                                        }
                                    </td>
                                    <td>
                                        {
                                            item.deadline
                                        }
                                    </td>
                                    <th>

                                        <Link to={`/volunteerDetail/${item._id}`}>
                                            <button className="btn btn-success text-white btn-xs">Details</button>
                                        </Link>

                                    </th>
                                </tr>)
                            }


                        </tbody>
                        {/* foot */}

                    </table>
                </div>}

        </div>
    );
};

export default AllVolunteerNeeds;