import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SurveyorDashboard = () => {
  const [profile, setProfile] = useState(null);
  const [surveys, setSurveys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch profile and surveys
  const fetchProfileAndSurveys = async () => {
    setLoading(true); // Enable loading state on refresh
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found in local storage');
      }

      const profileResponse = await axios.get('http://localhost:5000/api/auth/profile', {
        headers: { Authorization: `Bearer ${token}` }
      });

      setProfile(profileResponse.data);

      if (profileResponse.data.allocatedSurveys && profileResponse.data.allocatedSurveys.length > 0) {
        const surveyPromises = profileResponse.data.allocatedSurveys.map(survey =>
          axios.get(`http://localhost:5000/api/forms/${survey.surveyId}`, {
            headers: { Authorization: `Bearer ${token}` }
          }).catch(err => {
            console.error(`Error fetching survey with ID ${survey.surveyId}:`, err);
            return { data: { title: "Error Loading Survey", _id: survey.surveyId } }; // Provide default data on error
          })
        );

        const surveyResponses = await Promise.all(surveyPromises);
        setSurveys(surveyResponses.map(response => response.data));
      } else {
        console.log('No surveys allocated to this profile');
        setSurveys([]);
      }

      setLoading(false);
    } catch (err) {
      console.error('Error fetching profile and surveys:', err);
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfileAndSurveys();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!profile) return <div>No profile data available</div>;

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Surveyor Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Profile</h3>
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <button onClick={fetchProfileAndSurveys} className="mt-4 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Refresh Surveys</button>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Allocated Surveys</h3>
          <p><strong>Number of Surveys:</strong> {surveys.length}</p>
          <ul className="list-disc list-inside mt-2">
            {surveys.map((survey) => (
              <li key={survey._id}>
                <a href={`/main-survey/${survey._id}`} className="text-blue-500 hover:underline">
                  {survey.title || 'Untitled Survey'}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SurveyorDashboard;
