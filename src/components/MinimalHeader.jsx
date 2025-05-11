// MinimalHeader.js
import React from 'react';
import { FaHome, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styling/MinimalHeader.css';

function MinimalHeader() {
  return (
    <div className="minimal-header">
      <Link to="/"><FaHome /> Home</Link>
     
    </div>
  );
}

export default MinimalHeader;
