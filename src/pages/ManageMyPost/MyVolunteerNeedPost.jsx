import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import SectionTitle from "../../Components/SectionTItle/SectionTitle";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";


const MyVolunteerNeedPost = () => {
    const { user,isDarkMode } = useAuth();
    // const [myPost, setMyPost] = useState([]);
    const axiosSecure = useAxiosSecure();

    //    my applied data



    // my posted data 
    const { data: myPost = [], refetch } = useQuery({
        queryKey: ['mypost'],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/myPost?email=${user?.email}`);
            // console.log(data)
            return data;

        }
    })

    const handleDelete = async (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const { data } = await axiosSecure.delete(`/delete/${id}`);
                    console.log(data);
                    toast.success('deleted successfully')

                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    refetch()
                }
                catch (err) {
                    console.log(err);
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: `${err.message}`,
                        footer: '<a href="#">Why do I have this issue?</a>'
                    });
                }

            }
        });

    }
    return (
        <div className="p-6">
            <h1 className="text-center font-bold text-5xl my-28 text-[#E5B561]">My Volunteer Need Post</h1>

            <div className={`overflow-x-auto ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white'} shadow-lg rounded-lg`}>
                <table className="table-auto w-full text-left text-gray-600">
                    {/* Table head */}
                    <thead className="bg-[#4E896D] text-white">
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
                        {myPost.length == 0 ? <div className="text-red-600 text-4xl font-bold text-center my-40">No Data</div>
                            :
                            myPost.map((item, index) => (
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
                                        <button
                                            onClick={() => handleDelete(item._id)}
                                            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300">
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

export default MyVolunteerNeedPost;