import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Detail = () => {
    const data = useLoaderData();
    const { user } = useAuth(); // Assuming user info is stored in context
    const navigate = useNavigate();

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
        };
        console.log(volunteerData)

        // Send the volunteer request to the backend
        // const response = await fetch("/api/volunteer-request", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(volunteerData),
        // });

        // if (response.ok) {
        //     // Close the modal and navigate to a success page
        //      // Navigate to success page or show success message
        // } else {
        //     alert("Failed to submit your volunteer request.");
        // }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{postTitle}</h2>
            <img
                src={thumbnail}
                alt="Thumbnail"
                className="w-full h-64 object-cover rounded-md mb-6"
            />
            <div className="space-y-4">
                <p>
                    <strong>Category:</strong> {category}
                </p>
                <p>
                    <strong>Description:</strong> {description}
                </p>
                <p>
                    <strong>Location:</strong> {location}
                </p>
                <p>
                    <strong>Volunteers Needed:</strong> {volunteersNeeded}
                </p>
                <p>
                    <strong>Deadline:</strong> {deadline}
                </p>
                <p>
                    <strong>Organizer Name:</strong> {organizerName}
                </p>
                <p>
                    <strong>Organizer Email:</strong> {organizerEmail}
                </p>
            </div>

            <div className="mt-6">
                {/* Button to open the modal */}
                <button onClick={openModal} className="btn btn-primary">
                    Be a Volunteer
                </button>
            </div>

            {/* Modal Component */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
                    <div className="modal modal-open">
                        <div className="modal-box relative">
                            <h2 className="text-2xl font-bold mb-4">
                                Volunteer for: {postTitle}
                            </h2>

                            {/* Modal Form */}
                            <form onSubmit={handleSubmit} className="space-y-4">
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

                                <button type="submit" className="btn btn-primary w-full">
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
