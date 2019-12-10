import React from 'react';
import { Link } from 'react-router-dom';
import ErrorImage from '../../images/error.png';
import './error.css';

const Error = () => {
  return (
    <div className="error-container">
      <div className="img-container">
        <img src={ErrorImage} alt="Not Found" />
      </div>

      <div className="content">
        <h1> Oops !</h1>
        <p>The link you followed is either outdated or doesn't exist </p>
        <Link to="/" className="go-back">
          Go back Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
