import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import SurveyorDashboard from './components/SurveyorDashboard';
import StartingPage from './components/startingPage';
import Login from './components/Login';
import ManageCustomSurveys from './components/ManageCustomSurveys';
import UserDashboard from './components/UserDashboard';
import RegisterSurveyor from './components/RegisterSurveyor';
import ManageSurveys from './components/ManageSurveys';
import CreateSurveys from './components/CreateSurveys';
import AllocateSurveys from './components/AllocateSurveys';
import Layout from './components/Layout';
import MainSurvey from './components/MainSurvey';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><StartingPage /></Layout>} />
        <Route path="/admin-login" element={<Layout><Login /></Layout>} />
        <Route path="/admin-dashboard" element={<Layout><AdminDashboard /></Layout>} />
        <Route path="/admin/register-surveyor" element={<Layout><RegisterSurveyor /></Layout>} />
        <Route path="/admin/manage-surveys" element={<Layout><ManageSurveys /></Layout>} />
        <Route path="/surveyor-login" element={<Layout><Login /></Layout>} />
        <Route path="/surveyor-dashboard" element={<Layout><SurveyorDashboard /></Layout>} />
        <Route path="/admin/manage-custom-surveys" element={<Layout><ManageCustomSurveys /></Layout>} />
        <Route path="/admin/create-surveys" element={<Layout><CreateSurveys /></Layout>} />
        <Route path="/admin/allocate-surveys" element={<Layout><AllocateSurveys /></Layout>} />
        <Route path="/user-dashboard/:linkId" element={<Layout><UserDashboard /></Layout>} />
        <Route path="/main-survey/:surveyId" element={<MainSurvey />} /> {/* New route without layout */}
        <Route path="/created-main-survey" element={<MainSurvey />} />
      </Routes>
    </Router>
  );
};

export default App;



/*import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import SurveyorDashboard from './components/SurveyorDashboard';
import StartingPage from './components/startingPage';
import Login from './components/Login';
import ManageCustomSurveys from './components/ManageCustomSurveys';
import UserDashboard from './components/UserDashboard';
import RegisterSurveyor from './components/RegisterSurveyor';
import ManageSurveys from './components/ManageSurveys';
import CreateSurveys from './components/CreateSurveys'; // Import the new component
import AllocateSurveys from './components/AllocateSurveys'; // Import the new component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/admin-login" element={<Login />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin/register-surveyor" element={<RegisterSurveyor />} />
        <Route path="/admin/manage-surveys" element={<ManageSurveys />} />
        <Route path="/surveyor-login" element={<Login />} />
        <Route path="/surveyor-dashboard" element={<SurveyorDashboard />} />
        <Route path="/admin/manage-custom-surveys" element={<ManageCustomSurveys />} />
        <Route path="/admin/create-surveys" element={<CreateSurveys />} />
        <Route path="/admin/allocate-surveys" element={<AllocateSurveys />} />
        <Route path="/user-dashboard/:linkId" element={<UserDashboard />} />
        <Route path="/" element={<StartingPage />} />
      </Routes>
    </Router>
  );
};

export default App;*/
