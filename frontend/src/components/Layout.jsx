import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  const [role, setRole] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userRole = localStorage.getItem('role');
    if (token && userRole) {
      setIsAuthenticated(true);
      setRole(userRole);
    } else {
      setIsAuthenticated(false);
    }
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    setIsAuthenticated(false);
    setRole('');
    navigate('/');
  };

  const isMainSurveyPage = location.pathname === '/main-survey';

  return (
    <div className="flex h-screen">
      {!isMainSurveyPage && isAuthenticated && <Sidebar role={role} />}
      <div className="flex flex-col flex-grow">
        <nav className="bg-gray-800 text-white p-4 shadow-md">
          <div className="w-full flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <img
                src="https://gprss.in/feedback/logo.webp"
                alt="Logo"
                className="h-10"
              />
            </div>
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              {!isAuthenticated && (
                <>
                  <li>
                    <Link to="/surveyor-login" className="hover:underline">
                      Surveyor Login
                    </Link>
                  </li>
                  <li>
                    <Link to="/admin-login" className="hover:underline">
                      Admin Login
                    </Link>
                  </li>
                </>
              )}
              {isAuthenticated && (
                <li>
                  <button onClick={handleLogout} className="hover:underline">
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </div>
        </nav>

        <div className="flex-grow p-6 overflow-auto">
          {children}
        </div>

        {!isMainSurveyPage && (
          <footer className="bg-gray-800 text-white text-center p-4">
            &copy; 2024 My Application
          </footer>
        )}
      </div>
    </div>
  );
};

export default Layout;
