import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();
  const location = useLocation();
  const role = location.pathname.includes('admin') ? 'admin' : 'surveyor';

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = role === 'admin' ? 'admin/login' : 'login';
      const payload = role === 'admin' 
        ? { username: credentials.username, password: credentials.password }
        : { email: credentials.email, password: credentials.password };

      const response = await axios.post(`http://localhost:5000/api/auth/${endpoint}`, payload);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('role', role);

      if (role === 'admin') {
        navigate('/admin-dashboard');
      } else {
        navigate('/surveyor-dashboard');
      }
    } catch (err) {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 mt-6">
      <h2 className="text-3xl font-bold mb-6 text-center">{role.charAt(0).toUpperCase() + role.slice(1)} Login</h2>
      <form onSubmit={handleSubmit}>
        {role === 'admin' ? (
          <div className="mb-4">
            <label className="block text-gray-700">Username:</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ) : (
          <div className="mb-4">
            <label className="block text-gray-700">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}
        <div className="mb-4">
          <label className="block text-gray-700">Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
