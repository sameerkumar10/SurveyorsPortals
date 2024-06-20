import React from 'react';
import { Link } from 'react-router-dom';

const StartingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <div className="starting-page flex space-x-6">
        <div className="card bg-white p-6 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <h3 className="text-xl font-semibold mb-4">Admin</h3>
          <Link to="/admin-login" className="text-blue-500 hover:underline">Start Here</Link>
        </div>
        <div className="card bg-white p-6 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <h3 className="text-xl font-semibold mb-4">Surveyor</h3>
          <Link to="/surveyor-login" className="text-blue-500 hover:underline">Start Here</Link>
        </div>
        <div className="card bg-white p-6 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <h3 className="text-xl font-semibold mb-4">User</h3>
          <Link to={`/user-dashboard/sampleLinkId`} className="text-blue-500 hover:underline">Start Here</Link> {/* Replace sampleLinkId with actual linkId */}
        </div>
      </div>
    </div>
  );
};

export default StartingPage;
