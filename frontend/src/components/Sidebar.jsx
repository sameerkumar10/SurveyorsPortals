import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ role }) => {
  return (
    <div className="sidebar bg-gray-800 text-white p-4 h-full">
      <div className="sidebar-content">
        <h2 className="text-2xl mb-4">{role.charAt(0).toUpperCase() + role.slice(1)} Dashboard</h2>
        <ul className="space-y-4">
          {role === 'admin' ? (
            <>
              <li>
                <Link to="/admin-dashboard" className="hover:underline">
                  Admin Dashboard
                </Link>
              </li>
              <li>
                <Link to="/admin/register-surveyor" className="hover:underline">
                  Register Surveyor
                </Link>
              </li>
              <li>
                <Link to="/admin/manage-surveys" className="hover:underline">
                  Manage Surveys
                </Link>
              </li>
              <li>
                <Link to="/admin/manage-custom-surveys" className="hover:underline">
                  Manage Custom Surveys
                </Link>
              </li>
            </>
          ) : role === 'surveyor' ? (
            <>
              <li>
                <Link to="/surveyor-dashboard" className="hover:underline">
                  Surveyor Dashboard
                </Link>
              </li>
              <li>
                <Link to="/admin/manage-surveys" className="hover:underline">
                  Manage Surveys
                </Link>
              </li>
            </>
          ) : (
            <li>Please login</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
