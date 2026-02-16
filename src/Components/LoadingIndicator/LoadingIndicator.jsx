import React from 'react';
import './LoadingIndicator.css';

const LoadingIndicator = ({ message = 'Loading more...' }) => {
  return (
    <div className="loading-indicator">
      <div className="spinner"></div>
      <p className="loading-text">{message}</p>
    </div>
  );
};

export default LoadingIndicator;
