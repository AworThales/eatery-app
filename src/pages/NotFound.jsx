// NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div id="error-page" className="min-h-screen bg-gray-100 flex flex-col justify-center items-center text-center p-4">
      {/* 404 Error Box */}
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-6xl font-extrabold text-gray-800">404</h1>
        <p className="text-2xl font-semibold text-gray-600 mt-4">Oops! Page not found.</p>
        <p className="text-lg text-gray-500 mt-2">The page you're looking for might have been moved or deleted.</p>
        

        {/* CTA Button to go back to Home */}
        <Link
          to="/"
          className="mt-8 inline-block px-6 py-3 bg-green text-white font-semibold rounded-lg hover:bg-violet-100 transition"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
