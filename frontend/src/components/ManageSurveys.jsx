import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageSurveys = () => {
  const [surveyors, setSurveyors] = useState([]);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [role, setRole] = useState(localStorage.getItem('role')); // Get the role from local storage

  useEffect(() => {
    const fetchSurveyors = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/surveyors');
        const data = await response.json();
        if (response.ok) {
          setSurveyors(data);
        } else {
          setError(data.error);
        }
      } catch (error) {
        setError('Failed to fetch surveyors');
        console.error('Error fetching surveyors:', error);
      }
    };

    fetchSurveyors();
  }, []);

  const handleSendEmail = async (email) => {
    try {
      const response = await fetch('http://localhost:5000/api/surveyors/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage(`Email sent successfully to ${email}`);
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError('Failed to send email');
      console.error('Error sending email:', error);
    }
  };

  const handleSendLink = async (email) => {
    try {
      const response = await axios.post('http://localhost:5000/api/surveys/send-link', { email }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      if (response.data.success) {
        setMessage(`Survey link sent successfully to ${email}`);
      } else {
        setError(response.data.error);
      }
    } catch (error) {
      setError('Failed to send survey link');
      console.error('Error sending survey link:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Manage Surveys</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {message && <p className="text-green-500 mb-4">{message}</p>}
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2 text-left">Name</th>
            <th className="border p-2 text-left">Email</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {surveyors.map(surveyor => (
            <tr key={surveyor._id}>
              <td className="border p-2">{surveyor.name}</td>
              <td className="border p-2">{surveyor.email}</td>
              <td className="border p-2 text-center">
                {role === 'admin' ? (
                  <button 
                    onClick={() => handleSendEmail(surveyor.email)} 
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
                  >
                    Send Email
                  </button>
                ) : (
                  <button 
                    onClick={() => handleSendLink(surveyor.email)} 
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
                  >
                    Send Survey Link
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageSurveys;
