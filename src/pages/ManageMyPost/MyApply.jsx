import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import SectionTitle from "../../Components/SectionTItle/SectionTitle";
// / Icon to represent applying

import { FcCancel } from "react-icons/fc";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const MyApply = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    // Fetching volunteer request data for the user
    const { data: myApply = [] ,refetch} = useQuery({
        queryKey: ['myApply'],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/myApply?email=${user?.email}`);
            return data;
        }
    });


    const handleCancel =async(id) =>{

        Swal.fire({
            title: "Are you sure?",
            text: "You want to cancel this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Cancel it!"
          }).then( async(result) => {
            if (result.isConfirmed){
                try {
                    const { data } = await axiosSecure.delete(`/deleteApply/${id}`);
                    console.log(data);
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your application canceld.",
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
            <SectionTitle title={"My Volunteer Request Posts"} subTitle={"My Requests"} />

            <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
                <table className="table-auto w-full text-left text-gray-600">
                    {/* Table head */}
                    <thead className="bg-green-500 text-white">
                        <tr>
                            <th className="py-3 px-6">#</th>
                            <th className="py-3 px-6">Thumbnail</th>
                            <th className="py-3 px-6">Title</th>
                            <th className="py-3 px-6">Category</th>
                            <th className="py-3 px-6">Status</th>
                            <th className="py-3 px-6">Status</th>
                        </tr>
                    </thead>

                    {/* Table body */}
                    <tbody>
                        {myApply.length == 0 ? <div className="text-red-600 text-4xl font-bold text-center my-40">No Data</div> :
                         myApply.map((item, index) => (
                            <tr key={item._id} className="border-b hover:bg-gray-50">
                                <td className="py-4 px-6">{index + 1}</td>

                                {/* Thumbnail Column */}
                                <td className="py-4 px-6">
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img src={item.thumbnail} alt="Post Thumbnail" className="object-cover" />
                                            </div>
                                        </div>
                                    </div>
                                </td>

                                {/* Post Title */}
                                <td className="py-4 px-6">{item.postTitle}</td>

                                {/* Category */}
                                <td className="py-4 px-6">{item.category}</td>

                                {/* Volunteers Needed */}
                                <td className="py-4 px-6">{item.status}</td>

                                {/* Status Column */}
                                <td className="py-4 px-6 text-center">
                                   <button 
                                   onClick={()=>handleCancel(item._id)} 
                                   className="btn text-white">
                                    <FcCancel size={40}/>
                                   </button>
                                </td>
                            </tr>
                        ))
                        }
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyApply;
