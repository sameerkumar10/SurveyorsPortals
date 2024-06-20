import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateSurveys = () => {
  const [surveyJson, setSurveyJson] = useState({
    title: "Survey Title",
    elements: [
      { type: "text", name: "question1", title: "Your first question?" }
    ]
  });
  const [questionCounter, setQuestionCounter] = useState(2); // To keep track of the unique question index
  const navigate = useNavigate();

  const handleSaveSurvey = () => {
    axios.post('http://localhost:5000/api/forms/save', surveyJson, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
    .then(response => {
      alert('Survey saved successfully');
      navigate(`/created-main-survey?surveyId=${response.data.formId}`);
    })
    .catch(error => {
      console.error('Error saving survey:', error);
    });
  };

  const handleTitleChange = (e) => {
    setSurveyJson({
      ...surveyJson,
      title: e.target.value
    });
  };

  const handleQuestionChange = (index, field, value) => {
    const updatedElements = surveyJson.elements.map((question, i) => 
      i === index ? { ...question, [field]: value } : question
    );
    setSurveyJson({
      ...surveyJson,
      elements: updatedElements
    });
  };

  const handleOptionChange = (index, optionIndex, value) => {
    const updatedElements = surveyJson.elements.map((question, i) => {
      if (i === index) {
        const options = question.choices.map((option, j) => 
          j === optionIndex ? value : option
        );
        return { ...question, choices: options };
      }
      return question;
    });
    setSurveyJson({
      ...surveyJson,
      elements: updatedElements
    });
  };

  const handleAddOption = (index) => {
    const updatedElements = surveyJson.elements.map((question, i) => {
      if (i === index) {
        const options = question.choices ? [...question.choices, ''] : [''];
        return { ...question, choices: options };
      }
      return question;
    });
    setSurveyJson({
      ...surveyJson,
      elements: updatedElements
    });
  };

  const handleAddQuestion = () => {
    const newQuestion = {
      type: 'text',
      name: `question${questionCounter}`,
      title: `Question ${questionCounter}`
    };
    setQuestionCounter(questionCounter + 1);
    setSurveyJson({
      ...surveyJson,
      elements: [...surveyJson.elements, newQuestion]
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Create Survey</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Survey Title
        </label>
        <input
          type="text"
          value={surveyJson.title}
          onChange={handleTitleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      {surveyJson.elements.map((question, index) => (
        <div key={index} className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Question {index + 1} Title
          </label>
          <input
            type="text"
            value={question.title}
            onChange={(e) => handleQuestionChange(index, 'title', e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <label className="block text-sm font-medium text-gray-700 mt-2">
            Input Type
          </label>
          <select
            value={question.type}
            onChange={(e) => handleQuestionChange(index, 'type', e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="text">Text</option>
            <option value="checkbox">Checkbox</option>
            <option value="radiogroup">Radio Group</option>
            <option value="dropdown">Dropdown</option>
            <option value="comment">Comment</option>
            <option value="number">Number</option>
            <option value="date">Date</option>
            <option value="file">File Upload</option>
            <option value="rating">Rating</option>
          </select>
          {(question.type === 'checkbox' || question.type === 'radiogroup' || question.type === 'dropdown') && (
            <div className="mt-2">
              <label className="block text-sm font-medium text-gray-700">
                Options
              </label>
              {question.choices && question.choices.map((option, optionIndex) => (
                <div key={optionIndex} className="flex items-center mt-1">
                  <input
                    type="text"
                    value={option}
                    onChange={(e) => handleOptionChange(index, optionIndex, e.target.value)}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              ))}
              <button
                onClick={() => handleAddOption(index)}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
              >
                Add Option
              </button>
            </div>
          )}
        </div>
      ))}
      <button
        onClick={handleAddQuestion}
        className="mt-2 bg-green-500 text-white px-4 py-2 rounded"
      >
        Add Question
      </button>
      <div className="flex justify-between mt-4">
        <button
          onClick={handleSaveSurvey}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Save Survey
        </button>
      </div>
    </div>
  );
};

export default CreateSurveys;
