import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UserDashboard = () => {
  const { linkId } = useParams();
  const [isValid, setIsValid] = useState(null);

  useEffect(() => {
    const validateLink = async () => {
      try {
        const response = await axios.get(`/api/surveys/validate/${linkId}`);
        setIsValid(response.data.valid);
      } catch (error) {
        setIsValid(false);
      }
    };

    validateLink();
  }, [linkId]);

  if (isValid === null) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {isValid ? (
        <div>
          <h2>Survey</h2>
          <p>Survey content goes here...</p>
        </div>
      ) : (
        <p>Wait till surveyor sends you the link</p>
      )}
    </div>
  );
};

export default UserDashboard;
