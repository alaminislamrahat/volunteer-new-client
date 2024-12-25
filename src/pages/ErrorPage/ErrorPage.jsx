import React from "react";
import { Link } from "react-router-dom"; // If you want to use Link for redirection

const ErrorPage = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-xl max-w-md w-full">
        <h1 className="text-6xl font-extrabold text-red-500 mb-4">Oops!</h1>
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">Something went wrong</h2>
        <p className="text-gray-500 mb-8">We couldn't find the page you're looking for. Please try again later or go back to the homepage.</p>
        
        <Link to="/" className="btn btn-primary text-white bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
