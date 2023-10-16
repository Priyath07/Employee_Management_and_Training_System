import { useParams, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';

function AddEmployee() {
  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [age, setAge] = useState('');
  const [jobExperience, setJobExperience] = useState(0);
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('male');
  const [education, setEducation] = useState('');
  const [nationalId, setNationalId] = useState('');
  const [profession, setProfession] = useState('');
  const [userType, setUserType] = useState('employee');
  const [skills, setSkills] = useState('');
  const [itNumber, setItNumber] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);
    const ageDiff = today - birth;
    const ageDate = new Date(ageDiff);
    const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
    return calculatedAge;
  };

  const validateInputs = () => {
    let hasError = false;

    if (
      !name ||
      !dateOfBirth ||
      !jobExperience ||
      !email ||
      !phoneNumber ||
      !address ||
      !education ||
      !nationalId ||
      !profession ||
      !skills ||
      !itNumber
    ) {
      setError('All fields are required');
      hasError = true;
    } else if (isNaN(jobExperience) || jobExperience < 0) {
      setError('Job Experience must be a positive number');
      hasError = true;
    } else if (!/^\d{10}$/.test(phoneNumber)) {
      setError('Phone Number must have exactly 10 digits');
      hasError = true;
    } else if (!/^\d{12}$|^\d{10}V$/.test(nationalId)) {
      setError(
        'National ID must have either 12 digits or 10 digits followed by a "V"'
      );
      hasError = true;
    }

    if (!hasError) {
      setError('');
    }

    return !hasError;
  };

  const sendData = (e) => {
    e.preventDefault();

    if (validateInputs()) {
      const calculatedAge = calculateAge(dateOfBirth);
      const newEmployee = {
        name,
        age: calculatedAge,
        dateOfBirth,
        jobExperience,
        email,
        phoneNumber,
        address,
        gender,
        education,
        nationalId,
        profession,
        userType,
        skills,
        itNumber,
      };

      axios
        .post('http://localhost:8070/person/person/add', newEmployee)
        .then(() => {
          alert('Employee Added');
          navigate(`/person/nationalId/${nationalId}`);
        })
        .catch((err) => {
          alert(err);
        });
    }
  };

  return (
    <>
      <div className="box">
        <h1>Add New Employee</h1>
        <form onSubmit={sendData} className="form-container">
          <table>
            <tbody>
              <tr>
                <td>
                  <div className="form-group">
                    <label htmlFor="nationalId">National Id</label>
                    <input
                      required
                      type="text"
                      id="nationalId"
                      className="input-field"
                      placeholder="Enter National Id"
                      onChange={(e) => {
                        setNationalId(e.target.value);
                      }}
                    />
                  </div>
                </td>
                <td>
                  <div className="form-group">
                    <label htmlFor="name">Employee Name</label>
                    <input
                      required
                      type="text"
                      id="name"
                      className="input-field"
                      placeholder="Enter Name"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="form-group">
                    <label htmlFor="dateOfBirth">Date of Birth</label>
                    <input
                      required
                      type="date"
                      id="dateOfBirth"
                      className="input-field"
                      onChange={(e) => {
                        setDateOfBirth(e.target.value);
                        setAge(calculateAge(e.target.value));
                      }}
                    />
                  </div>
                </td>
                <td>
                  <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <input type="number" id="age" value={age} readOnly className="input-field" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="form-group">
                    <label htmlFor="jobExperience">Job Experience in Years</label>
                    <input
                      required
                      type="number"
                      id="jobExperience"
                      className="input-field"
                      placeholder="Enter Job Experience in Years"
                      onChange={(e) => {
                        setJobExperience(parseInt(e.target.value));
                      }}
                    />
                  </div>
                </td>
                <td>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      required
                      type="email"
                      id="email"
                      className="input-field"
                      placeholder="Enter Email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                      required
                      type="tel"
                      id="phoneNumber"
                      className="input-field"
                      placeholder="Enter Phone Number"
                      onChange={(e) => {
                        setPhoneNumber(e.target.value);
                      }}
                    />
                  </div>
                </td>
                <td>
                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input
                      required
                      type="text"
                      id="address"
                      className="input-field"
                      placeholder="Enter Address"
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              className="input-field"
              onChange={(e) => {
                setGender(e.target.value);
              }}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <table>
            <tbody>
              <tr>
                <td>
                  <div className="form-group">
                    <label htmlFor="education">Education</label>
                    <input
                      required
                      type="text"
                      id="education"
                      className="input-field"
                      placeholder="Enter Education"
                      onChange={(e) => {
                        setEducation(e.target.value);
                      }}
                    />
                  </div>
                </td>
                <td>
                  <div className="form-group">
                    <label htmlFor="profession">Profession</label>
                    <input
                      required
                      type="text"
                      id="profession"
                      className="input-field"
                      placeholder="Enter Profession"
                      onChange={(e) => {
                        setProfession(e.target.value);
                      }}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="form-group">
                    <label htmlFor="userType">User Type</label>
                    <select
                      id="userType"
                      className="input-field"
                      onChange={(e) => {
                        setUserType(e.target.value);
                      }}
                    >
                      <option value="employee">Employee</option>
                      <option value="lecturer">Lecturer</option>
                      <option value="admin">Admin</option>
                      <option value="driver">Driver</option>
                    </select>
                  </div>
                </td>
                <td>
                  <div className="form-group">
                    <label htmlFor="skills">Skills</label>
                    <input
                      required
                      type="text"
                      id="skills"
                      className="input-field"
                      placeholder="Enter Skills"
                      onChange={(e) => {
                        setSkills(e.target.value);
                      }}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="form-group">
                    <label htmlFor="itNumber">IT Number</label>
                    <input
                      required
                      type="text"
                      id="iNumber"
                      className="input-field"
                      placeholder="Enter IT Number"
                      onChange={(e) => {
                        setItNumber(e.target.value);
                      }}
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="error">{error}</div>
          <button type="submit" className="submit-button">
            Add
          </button>
        </form>
      </div>
    </>
  );
}

export default AddEmployee;
