import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [itNumber, setITNumber] = useState('');
  const [nationalId, setNationalId] = useState('');

  const handleLogin = () => {
    // Add your validation logic here
    if (itNumber === 'IT21801822' && nationalId === '200131003173') {
      // Redirect to the profile page
      window.location.href = `/person/nationalId/${nationalId}`;
    } else {
      alert('Invalid IT number or National ID. Please try again.');
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <div className="login-form">
        <div className="form-group">
          <label htmlFor="itNumber">IT Number:</label>
          <input
            type="text"
            name="itNumber"
            value={itNumber}
            onChange={(e) => setITNumber(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="nationalId">National ID:</label>
          <input
            type="text"
            name="nationalId"
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
          />
        </div>
        <button className="custom-button" onClick={handleLogin}>
          Login
        </button>
        <br />
        <br />
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
}

export default Login;
