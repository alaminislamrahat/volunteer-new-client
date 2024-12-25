import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";  // For DatePicker styles
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import useAuth from "../../Hooks/useAuth";
import SectionTitle from '../../Components/SectionTItle/SectionTitle';

const AddVolunteerPost = () => {
  const axiosSecure = useAxiosSecure();
  
  const {user,
    setDarkMode,
    isDarkMode,
    toggleDarkMode} = useAuth();

  // Step 1: Add a state for the date
  const [deadline, setDeadline] = useState(new Date());

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
      volunteersNeeded:parseInt( form.volunteersNeeded.value),
      deadline: deadline.toISOString().split("T")[0],  // Use state value for deadline
      organizerName: form.organizerName.value,
      organizerEmail: form.organizerEmail.value
    };

    // Log form data to console (for now, can replace with API call later)
    console.log(formData);

    try {
      const { data } = await axiosSecure.post('/volunteer', formData);
      console.log(data);
      if (data.insertedId) {
        toast.success('Data added successfully');
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  return (
    <div className={`max-w-4xl mx-auto p-6 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white '} rounded-lg shadow-lg`}>
      <SectionTitle title={"Add Volunteer Need Post"} subTitle={"add data"}/>
      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Thumbnail */}
        <div className="form-control">
          <label htmlFor="thumbnail" className="label">
            <span className={`label-text ${isDarkMode && 'text-white'}`}>Thumbnail</span>
          </label>
          <input
            type="text"
            id="postTitle"
            name="thumbnail"
            required
            className="input input-bordered w-full"
          />
        </div>

        {/* Post Title */}
        <div className="form-control">
          <label htmlFor="postTitle" className="label">
            <span className={`label-text ${isDarkMode && 'text-white'}`}>Post Title</span>
          </label>
          <input
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
            <span className={`label-text ${isDarkMode && 'text-white'}`}>Description</span>
          </label>
          <textarea
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
            <span className={`label-text ${isDarkMode && 'text-white'}`}>Category</span>
          </label>
          <select
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
            <span className={`label-text ${isDarkMode && 'text-white'}`}>Location</span>
          </label>
          <input
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
            <span className={`label-text ${isDarkMode && 'text-white'}`}>No. of Volunteers Needed</span>
          </label>
          <input
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
            <span className={`label-text ${isDarkMode && 'text-white'}`}>Deadline</span>
          </label>
          <DatePicker
            id="deadline"
            name="deadline"
            selected={deadline}
            onChange={setDeadline}  // Update the state on date change
            dateFormat="yyyy-MM-dd"
            minDate={new Date()}
            className="input input-bordered w-full"
          />
        </div>

        {/* Organizer Name and Email (read-only) */}
        <div className="form-control">
          <label htmlFor="organizerName" className="label">
            <span className={`label-text ${isDarkMode && 'text-white'}`}>Organizer Name</span>
          </label>
          <input
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
            <span className={`label-text ${isDarkMode && 'text-white'}`}>Organizer Email</span>
          </label>
          <input
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
            Add Post
          </button>
        </div>

      </form>
    </div>
  );
};

export default AddVolunteerPost;
