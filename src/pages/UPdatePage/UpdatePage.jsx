import { useLoaderData, useNavigate } from "react-router-dom";
import SectionTitle from "../../Components/SectionTItle/SectionTitle";
import toast from "react-hot-toast";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import DatePicker from "react-datepicker";

const UpdatePage = () => {
    const data = useLoaderData();
    const axiosSecure = useAxiosSecure();
 
    const {user,
        setDarkMode,
        isDarkMode,
        toggleDarkMode} = useAuth();
    const navigate = useNavigate()

    // Step 1: Add a state for the date
    const [deadline, setDeadline] = useState(new Date(data.deadline)); // Default to existing deadline from data
    const { category, description, location, organizerEmail, organizerName, postTitle, thumbnail, volunteersNeeded, _id } = data;

    // Form submission handler
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;

        const formData = {
            thumbnail: form.thumbnail.value,
            postTitle: form.title.value,
            description: form.description.value,
            category: form.category.value,
            location: form.location.value,
            volunteersNeeded: parseInt(form.volunteersNeeded.value),
            deadline: deadline.toISOString().split("T")[0],  // Use state value for deadline
            organizerName: form.organizerName.value,
            organizerEmail: form.organizerEmail.value
        };

        // Log form data to console (for now, can replace with API call later)
        console.log(formData);

        try {
            const { data } = await axiosSecure.put(`/update/${_id}`, formData);
            console.log(data);
            toast.success('Data Update successfully');
            navigate('/manage-my-posts')
        } catch (err) {
            console.log(err);
            toast.error(err.message);
        }
    };
   
    return (
        <div className={`max-w-4xl mx-auto p-6 ${isDarkMode ? 'bg-gray-800 text-black' : 'bg-white '} rounded-lg shadow-lg`}>
            <SectionTitle title={"Update Volunteer Data"} subTitle={"update data"} />
            <form onSubmit={handleSubmit} className="space-y-4">

                {/* Thumbnail */}
                <div className="form-control">
                    <label htmlFor="thumbnail" className="label">
                        <span  className={`label-text ${isDarkMode && 'text-white'}`}>Thumbnail</span>
                    </label>
                    <input
                        defaultValue={thumbnail} // Set default value
                        type="text"
                        id="thumbnail"
                        name="thumbnail"
                        required
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Post Title */}
                <div className="form-control">
                    <label htmlFor="postTitle" className="label">
                        <span  className={`label-text ${isDarkMode && 'text-white'}`}>Post Title</span>
                    </label>
                    <input
                        defaultValue={postTitle} // Set default value
                        type="text"
                        id="postTitle"
                        name="title"
                        required
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Description */}
                <div className="form-control">
                    <label htmlFor="description" className="label">
                        <span  className={`label-text ${isDarkMode && 'text-white'}`}>Description</span>
                    </label>
                    <textarea
                        defaultValue={description} // Set default value
                        id="description"
                        name="description"
                        required
                        className="textarea textarea-bordered w-full"
                        rows="4"
                    ></textarea>
                </div>

                {/* Category */}
                <div className="form-control">
                    <label htmlFor="category" className="label">
                        <span  className={`label-text ${isDarkMode && 'text-white'}`}>Category</span>
                    </label>
                    <select
                        defaultValue={category} // Set default value
                        id="category"
                        name="category"
                        required
                        className="select select-bordered w-full"
                    >
                        <option value="">Select Category</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Education">Education</option>
                        <option value="Social Service">Social Service</option>
                        <option value="Animal Welfare">Animal Welfare</option>
                    </select>
                </div>

                {/* Location */}
                <div className="form-control">
                    <label htmlFor="location" className="label">
                        <span  className={`label-text ${isDarkMode && 'text-white'}`}>Location</span>
                    </label>
                    <input
                        defaultValue={location} // Set default value
                        type="text"
                        id="location"
                        name="location"
                        required
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Volunteers Needed */}
                <div className="form-control">
                    <label htmlFor="volunteersNeeded" className="label">
                        <span  className={`label-text ${isDarkMode && 'text-white'}`}>No. of Volunteers Needed</span>
                    </label>
                    <input
                        defaultValue={volunteersNeeded} // Set default value
                        type="number"
                        id="volunteersNeeded"
                        name="volunteersNeeded"
                        required
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Deadline */}
                <div className="form-control">
                    <label htmlFor="deadline" className="label">
                        <span  className={`label-text ${isDarkMode && 'text-white'}`}>Deadline</span>
                    </label>
                    <DatePicker
                        selected={deadline} // Default value from state
                        onChange={setDeadline}  // Update the state on date change
                        dateFormat="yyyy-MM-dd"
                        minDate={new Date()}
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Organizer Name and Email (read-only) */}
                <div className="form-control">
                    <label htmlFor="organizerName" className="label">
                        <span  className={`label-text ${isDarkMode && 'text-white'}`}>Organizer Name</span>
                    </label>
                    <input
                        defaultValue={organizerName} // Set default value
                        type="text"
                        id="organizerName"
                        name="organizerName"
                        value={user?.displayName}
                        readOnly
                        className="input input-bordered w-full"
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="organizerEmail" className="label">
                        <span  className={`label-text ${isDarkMode && 'text-white'}`}>Organizer Email</span>
                    </label>
                    <input
                        defaultValue={organizerEmail} // Set default value
                        type="email"
                        id="organizerEmail"
                        name="organizerEmail"
                        value={user?.email}
                        readOnly
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Submit Button */}
                <div className="form-control mt-4">
                    <button
                        type="submit"
                        className="btn btn-primary w-full"
                    >
                        Update Post
                    </button>
                </div>

            </form>
        </div>
    );
};

export default UpdatePage;
