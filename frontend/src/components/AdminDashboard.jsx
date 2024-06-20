import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleRegisterSurveyor = () => {
    navigate('/admin/register-surveyor');
  };

  const handleManageSurveys = () => {
    navigate('/admin/manage-surveys');
  };

  const handleManageCustomSurveys = () => {
    navigate('/admin/manage-custom-surveys');
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <button 
          onClick={handleRegisterSurveyor}
          className="bg-blue-500 text-white p-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
        >
          Register Surveyor
        </button>
        <button 
          onClick={handleManageSurveys}
          className="bg-green-500 text-white p-4 rounded-lg shadow-md hover:bg-green-600 transition duration-200"
        >
          Manage Surveys
        </button>
        <button 
          onClick={handleManageCustomSurveys}
          className="bg-purple-500 text-white p-4 rounded-lg shadow-md hover:bg-purple-600 transition duration-200"
        >
          Manage Custom Surveys
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
