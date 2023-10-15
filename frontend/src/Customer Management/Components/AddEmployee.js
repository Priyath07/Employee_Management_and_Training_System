
import { useParams, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import '../css/EmployeeForm.css';



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
  const [userType, setUserType] = useState('employee'); // Set a default user type
  const [skills, setSkills] = useState('');
  const [itNumber, setItNumber] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  
  

  // Function to calculate age based on date of birth
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
    <div className='box'>
      <h1>Add New Employee</h1>
      <form onSubmit={sendData} className="form-container">

      <div><label for="natinalId">National Id</label>
<input
  required
  type="text"
  id="nationalId"
  placeholder="Enter Natinal Id"
  onChange={(e) => {
    setNationalId(e.target.value);
  }}
/>

</div>
      <div>
 <label for="name">Employee Name</label>

 <input
  required
  type="text"
  id="name"
  placeholder="Enter Name"
  onChange={(e) => {
    setName(e.target.value);
  }}
/>
</div>
        <div>
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input
            required
            type="date"
            id="dateOfBirth"
            onChange={(e) => {
              setDateOfBirth(e.target.value);
              setAge(calculateAge(e.target.value));
            }}
          />
        </div>

        <div>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            value={age}
            readOnly
          />
        </div>
        
 <div>
 <label for="jobExperience">Job Experience in Years</label>
 <input
  required
  type="number"
  id="jobExperience"
  placeholder="Enter Job Experience in Years"
  onChange={(e) => {
    setJobExperience(parseInt(e.target.value));
  }}
/>
</div>

<div>
<label for="email">Email</label>
<input
  required
  type="email"
  id="email"
  placeholder="Enter Email"
  onChange={(e) => {
    setEmail(e.target.value);
  }}
/>
</div>

<div>
<label for="phoneNumber">Phone Number</label>
<input
  required
  type="tel"
  id="phoneNumber"
  placeholder="Enter Phone Number"
  onChange={(e) => {
    setPhoneNumber(e.target.value);
  }}
/>
</div>

<div>
<label for="address">Address</label>
<input
  required
  type="text"
  id="address"
  placeholder="Enter Address"
  onChange={(e) => {
    setAddress(e.target.value);
  }}
/>

</div>

<div>
<label for="gender">Gender</label>
<select
  id="gender"
  onChange={(e) => {
    setGender(e.target.value);
  }}
>



  <option value="male">Male</option>
  <option value="female">Female</option>
  <option value="other">Other</option>


</select>

</div>

<div>

<label for="education">Education</label>
<input
  required
  type="text"
  id="education"
  placeholder="Enter Education"
  onChange={(e) => {
    setEducation(e.target.value);
  }}
/>
</div>

<div>
      <label htmlFor="profession">Profession</label>
      <input
        required
        type="text"
        id="profession"
        placeholder="Enter Profession"
        onChange={(e) => {
          setProfession(e.target.value);
        }}
      />
    </div>

    <div>
      <label htmlFor="userType">User Type</label>
      <select
        id="userType"
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

    <div>
      <label htmlFor="skills">Skills</label>
      <input
        required
        type="text"
        id="skills"
        placeholder="Enter Skills"
        onChange={(e) => {
          setSkills(e.target.value);
        }}
      />
    </div>

    <div>

<label for="itNumber">IT Number</label>
<input
  required
  type="text"
  id="iNumber"
  placeholder="Enter IT Number"
  onChange={(e) => {
    setItNumber(e.target.value);
  }}
/>
</div>




        <div className="error">{error}</div>
        <button type="submit">Add</button>
      </form>

      </div>
    </>
  );
}

export default AddEmployee;

