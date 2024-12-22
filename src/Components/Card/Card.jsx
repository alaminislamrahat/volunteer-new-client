import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ item }) => {
    const {
        thumbnail,
        category,
        postTitle,
        deadline,
        _id
    } = item || {};

    return (
        <div className="card w-96 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
            {thumbnail && (
                <figure className="relative">
                    <img src={thumbnail} alt={postTitle} className="w-full h-48 object-cover rounded-t-xl" />
                    <div className="absolute top-4 left-4 text-white bg-opacity-70 bg-black px-4 py-2 rounded-lg text-md font-medium">{category}</div>
                </figure>
            )}
            <div className="card-body p-6">
                <h2 className="text-3xl font-semibold text-gray-900 mb-2 hover:text-indigo-600 transition-colors duration-200">{postTitle}</h2>
                <p className="text-sm text-gray-600 mb-4">{`Deadline: ${new Date(deadline).toLocaleDateString()}`}</p>
                <div className="card-actions justify-end mt-4">
                    <Link to={`/volunteerDetail/${_id}`}>

                        <button className="btn btn-primary bg-gradient-to-r from-teal-400 to-blue-500 text-white hover:bg-gradient-to-l transition-all duration-200 px-6 py-2 rounded-md">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;
