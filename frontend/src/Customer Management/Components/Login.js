import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/Login.css'


function Login() {
  const [itNumber, setITNumber] = useState('');
  const [nationalId, setNationalId] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    axios.post(`http://localhost:8070/person/login`, { itNumber, nationalId })
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          if (response.data.isITAdmin) {
            navigate(`/person/nationalId/${nationalId}`);
          } else if (response.data.isITLecturer) {
            navigate(`/person/lecturer/nationalId/${nationalId}`);
          } else if (response.data.isITDriver) {
            navigate(`/person/driver/nationalId/${nationalId}`);
          } else if (response.data.isITEmployee) {
            navigate(`/person/employee/nationalId/${nationalId}`);
          }else {
            alert('Login Successful');
          }
          setLoginSuccess(true);
        } else {
          alert('Invalid username or password');
        }
      })
      .catch((error) => {
        if (error.response.status === 401) {
          alert('Invalid username or password');
        }else {
          console.error('An error occurred', error);
          alert('An error occurred. Please try again later.');
        }
      })
  }
  return (
    <div className='container-login'>
      <h2 className='log-h2'>Login Page</h2>
      <br />
      <div className='form-details log-form-details'>
        <form onSubmit={handleLogin}>
          <div className="login-form log-login-form">
            <div className="form-group log-form-group">
              <label htmlFor="itNumber" className='log-label'>IT Number:</label>
              <input
                type="text"
                name="itNumber"
                value={itNumber}
                onChange={(e) => setITNumber(e.target.value)}
                required
                className='log-input'
              />
            </div>
            <div className="form-group log-form-group">
              <label htmlFor="nationalId" className='log-label'>National ID:</label>
              <input
                type="text"
                name="nationalId"
                value={nationalId}
                onChange={(e) => setNationalId(e.target.value)}
                required
                className='log-input'
              />
            </div>
            <button className="custom-button log-custom-button" type='submit'>
              Login
            </button>
            <br />
            <br />
            <Link to="/" className="link-back log-link-back">Back to Home</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
