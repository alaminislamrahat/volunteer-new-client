import { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa"; // Import React Icons
import SectionTitle from "../../Components/SectionTItle/SectionTitle";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";

const ManageMyPost = () => {
    const { user } = useAuth();
    const [myPost, setMyPost] = useState([]);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        const getData = async () => {
            const { data } = await axiosSecure.get(`/myPost?email=${user?.email}`);
            setMyPost(data);
        };
        getData();
    }, [axiosSecure, user.email]);

    return (
        <div className="p-6">
            <SectionTitle title={"My Volunteer Need Posts"} subTitle={"My Posted"} />

            <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
                <table className="table-auto w-full text-left text-gray-600">
                    {/* Table head */}
                    <thead className="bg-indigo-500 text-white">
                        <tr>
                            <th className="py-3 px-6">#</th>
                            <th className="py-3 px-6">Thumbnail</th>
                            <th className="py-3 px-6">Title</th>
                            <th className="py-3 px-6">Category</th>
                            <th className="py-3 px-6">Volunteer Need</th>
                            <th className="py-3 px-6">Update</th>
                            <th className="py-3 px-6">Delete</th>
                        </tr>
                    </thead>
                    {/* Table body */}
                    <tbody>
                        {myPost.map((item, index) => (
                            <tr key={item._id} className="border-b hover:bg-gray-50">
                                <td className="py-4 px-6">{index + 1}</td>
                                <td className="py-4 px-6">
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img src={item.thumbnail} alt="Post Thumbnail" className="object-cover" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-4 px-6">{item.postTitle}</td>
                                <td className="py-4 px-6">{item.category}</td>
                                <td className="py-4 px-6">{item.volunteersNeeded}</td>
                                <td className="py-4 px-6 text-center">
                                   <Link to={`/upade/${item._id}`}>
                                   <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300">
                                        <FaEdit className="inline-block mr-2" />
                                        Update
                                    </button>
                                   </Link>
                                </td>
                                <td className="py-4 px-6 text-center">
                                    <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300">
                                        <FaTrash className="inline-block mr-2" />
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageMyPost;
