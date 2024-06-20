import React, { useState } from 'react';

const RegisterSurveyor = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error state before submission

    // Client-side validation
    if (!formData.name || !formData.email || !formData.password) {
      setError('All fields are required');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/surveyors/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        alert('Surveyor registered and email sent successfully');
        setFormData({ name: '', email: '', password: '' }); // Reset form data
      } else {
        setError(data.error);
      }
    } catch (error) {
      console.error('Error registering surveyor:', error);
      setError('An unexpected error occurred');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 mt-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Register Surveyor</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Name:</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email:</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password:</label>
          <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            required 
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Register
        </button>
      </form>
      {error && <p className="mt-4 text-red-500">{error}</p>}
    </div>
  );
};

export default RegisterSurveyor;
