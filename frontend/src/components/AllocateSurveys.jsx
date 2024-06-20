import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AllocateSurveys = () => {
  const [surveyors, setSurveyors] = useState([]);
  const [surveys, setSurveys] = useState([]);
  const [selectedSurveyor, setSelectedSurveyor] = useState('');
  const [selectedSurveys, setSelectedSurveys] = useState([]);

  useEffect(() => {
    const fetchSurveyors = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/surveyors', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setSurveyors(response.data);
      } catch (err) {
        console.error('Error fetching surveyors:', err);
      }
    };

    const fetchSurveys = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/forms', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setSurveys(response.data);
      } catch (err) {
        console.error('Error fetching surveys:', err);
      }
    };

    fetchSurveyors();
    fetchSurveys();
  }, []);

  const handleSurveyorChange = (e) => {
    setSelectedSurveyor(e.target.value);
  };

  const handleSurveySelection = (e) => {
    const options = e.target.options;
    const selected = [];
    for (const option of options) {
      if (option.selected) {
        selected.push(option.value);
      }
    }
    setSelectedSurveys(selected);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/surveyors/allocate-surveys', {
        surveyorId: selectedSurveyor,
        surveyIds: selectedSurveys
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Surveys allocated successfully');
    } catch (err) {
      console.error('Error allocating surveys:', err);
      alert('Error allocating surveys');
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Allocate Surveys</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Select Surveyor:</label>
          <select 
            value={selectedSurveyor} 
            onChange={handleSurveyorChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a surveyor</option>
            {surveyors.map(surveyor => (
              <option key={surveyor._id} value={surveyor._id}>
                {surveyor.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Surveys:</label>
          <select 
            multiple 
            value={selectedSurveys} 
            onChange={handleSurveySelection}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {surveys.map((survey) => (
              <option key={survey._id} value={survey._id}>{survey.title}</option>
            ))}
          </select>
        </div>
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Allocate Surveys
        </button>
      </form>
    </div>
  );
};

export default AllocateSurveys;

