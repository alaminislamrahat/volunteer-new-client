import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Card = ({ item }) => {
    const {
        thumbnail,
        category,
        postTitle,
        deadline,
        _id,
        volunteersNeeded
    } = item || {};

    const { setDarkMode, isDarkMode, toggleDarkMode } = useAuth();

    return (
        <div
            className={`card w-full sm:w-96 lg:w-80 xl:w-96 ${isDarkMode ? 'bg-slate-600 text-white' : 'bg-white'} rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105`}>
            {thumbnail && (
                <figure className="relative">
                    <img
                        src={thumbnail}
                        alt={postTitle}
                        className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-t-xl"
                    />
                    <div className="absolute top-4 left-4 text-white bg-opacity-70 bg-black px-4 py-2 rounded-lg text-sm sm:text-md font-medium">
                        {category}
                    </div>
                </figure>
            )}
            <div className="card-body p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2 hover:text-indigo-600 transition-colors duration-200">
                    {postTitle}
                </h2>
                <p className="text-sm sm:text-md mb-4">{`Deadline: ${new Date(deadline).toLocaleDateString()}`}</p>
                <p className="text-sm sm:text-md mb-4">Need of volunteers: {volunteersNeeded}</p>
                <div className="card-actions justify-end mt-4">
                    <Link to={`/volunteerDetail/${_id}`}>
                        <button className="btn btn-primary bg-gradient-to-r from-teal-400 to-blue-500 text-white hover:bg-gradient-to-l transition-all duration-200 px-6 py-2 rounded-md text-sm sm:text-md">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;
