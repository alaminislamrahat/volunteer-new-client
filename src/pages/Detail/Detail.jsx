import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";

const Detail = () => {
    const data = useLoaderData();
    const axiosSecure = useAxiosSecure()
    
    const navigate = useNavigate();
    const {
        user,
        setDarkMode,
        isDarkMode,
        toggleDarkMode } = useAuth();

    const {
        category,
        deadline,
        description,
        location,
        organizerEmail,
        organizerName,
        postTitle,
        thumbnail,
        volunteersNeeded,
        _id,
    } = data || {};

    // Modal visibility state
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Open and close modal handlers
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    // toast for 0 volunteersNeeded 
    const handleToast = () => {
        toast.error("can't apply for be a volunteer .")
    }

    // Handle form submission from the modal
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Volunteer data with "requested" status
        const volunteerData = {
            volunteerName: user.displayName,
            volunteerEmail: user.email,
            suggestion: e.target.suggestion.value,
            status: "requested", // Default status set to "requested"
            postId: _id,
            category,
            deadline,
            description,
            location,
            organizerEmail,
            organizerName,
            postTitle,
            thumbnail,

        };
        console.log(volunteerData)


        try {
            const { data } = await axiosSecure.post('/beVolunteer', volunteerData)
            console.log(data);
            toast.success('successfully added')
            navigate('/')
        }
        catch (err) {
            console.log(err);
            toast.error(err.message)
        }


    };

    return (
        <div className={`max-w-4xl mx-auto p-6 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'} shadow-lg rounded-lg mb-24`}>
            <h2 className="text-4xl text-[#4E896D] pt-24 pb-4 font-bold  mb-4">{postTitle}</h2>
            <img
                src={thumbnail}
                alt="Thumbnail"
                className="w-full h-64 object-cover rounded-md mb-6"
            />
            <div className="space-y-4">
                <p className="flex md:gap-4">
                    <strong className="text-[#4E896D] ">Category:</strong> {category}
                </p>
                <p className="flex md:gap-4">
                    <strong className="text-[#4E896D] ">Description:</strong> {description}
                </p>
                <p className="flex md:gap-4">
                    <strong className="text-[#4E896D] ">Location:</strong> {location}
                </p>
                <p className="flex md:gap-4">
                    <strong className="text-[#4E896D] ">Volunteers Needed:</strong> {volunteersNeeded}
                </p>
                <p className="flex md:gap-4">
                    <strong className="text-[#4E896D] ">Deadline:</strong> {deadline}
                </p>
                <p className="flex md:gap-4">
                    <strong className="text-[#4E896D] ">Organizer Name:</strong> {organizerName}
                </p>
                <p className="flex md:gap-4">
                    <strong className="text-[#4E896D] ">Organizer Email:</strong> {organizerEmail}
                </p>
            </div>

            <div className="mt-6">
                {/* Button to open the modal */}
                {
                    volunteersNeeded == 0 ? <button
                        onClick={handleToast}
                        className="btn bg-[#4E896D] text-white">Be a Volunteer</button> : <button

                            onClick={openModal} className="btn bg-[#4E896D] text-white">
                        Be a Volunteer
                    </button>
                }
            </div>

            {/* Modal Component */}
            {isModalOpen && (
                <div className={`fixed inset-0  bg-gray-500 bg-opacity-50 flex justify-center items-center`}>
                    <div className="modal modal-open">
                        <div className={`${isDarkMode && 'bg-slate-900 '} modal-box relative `}>
                            <h2 className="text-2xl font-bold mb-4">
                                Volunteer for: {postTitle}
                            </h2>

                            {/* Modal Form */}
                            <form  onSubmit={handleSubmit} className="space-y-4 text-black">
                                <input
                                    type="text"
                                    value={thumbnail}
                                    readOnly
                                    className="input input-bordered w-full"
                                />
                                <input
                                    type="text"
                                    value={postTitle}
                                    readOnly
                                    className="input input-bordered w-full"
                                />
                                <textarea
                                    value={description}
                                    readOnly
                                    className="textarea textarea-bordered w-full"
                                />
                                <input
                                    type="text"
                                    value={category}
                                    readOnly
                                    className="input input-bordered w-full"
                                />
                                <input
                                    type="text"
                                    value={location}
                                    readOnly
                                    className="input input-bordered w-full"
                                />
                                <input
                                    type="text"
                                    value={volunteersNeeded}
                                    readOnly
                                    className="input input-bordered w-full"
                                />
                                <input
                                    type="text"
                                    value={deadline}
                                    readOnly
                                    className="input input-bordered w-full"
                                />
                                <input
                                    type="text"
                                    value={organizerName}
                                    readOnly
                                    className="input input-bordered w-full"
                                />
                                <input
                                    type="email"
                                    value={organizerEmail}
                                    readOnly
                                    className="input input-bordered w-full"
                                />

                                {/* Editable suggestion input */}
                                <textarea
                                    name="suggestion"
                                    placeholder="Your suggestion"
                                    className="textarea textarea-bordered w-full"
                                />

                                <button type="submit" className="btn text-white bg-[#4E896D] w-full">
                                    Request
                                </button>
                            </form>

                            <div className="modal-action">
                                <button className="btn" onClick={closeModal}>
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Detail;
