import React from 'react';
import { useNavigate } from 'react-router-dom';

const ManageCustomSurveys = () => {
  const navigate = useNavigate();
  const handleCreateSurveys = () => {
    navigate('/admin/create-surveys');
  };

  const handleAllocateSurveys = () => {
    navigate('/admin/allocate-surveys');
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Manage Custom Forms</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div 
          className="card bg-gray-100 p-6 rounded-lg shadow-md text-center cursor-pointer hover:bg-gray-200 transition duration-200"
          onClick={handleCreateSurveys}
        >
          <h3 className="text-xl font-semibold mb-4">Create Surveys</h3>
          <p>Click here to create new surveys.</p>
        </div>
        <div 
          className="card bg-gray-100 p-6 rounded-lg shadow-md text-center cursor-pointer hover:bg-gray-200 transition duration-200"
          onClick={handleAllocateSurveys}
        >
          <h3 className="text-xl font-semibold mb-4">Allocate Surveys</h3>
          <p>Click here to allocate surveys to surveyors.</p>
        </div>
      </div>
    </div>
  );
};

export default ManageCustomSurveys;
