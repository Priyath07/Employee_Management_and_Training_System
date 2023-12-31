import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Recruit() {
    const [formData, setFormData] = useState({
        fullName: '',
        address: '',
        email: '',
        nic: '',
        education: '',
        highSchool: '',
        city: '',
        graduate: 'no',
        diploma: '',
        additionalInfo: '',
    });

    const [cvFile, setCvFile] = useState(null);
    const [submittedData, setSubmittedData] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    const handleCvFileChange = (event) => {
        const file = event.target.files[0];
        setCvFile(file);
    };

    useEffect(() => {
        if (isEditing) {
            // Pre-fill the form with submitted data when in edit mode
            setFormData({
                fullName: submittedData.fullName,
                address: submittedData.address,
                email: submittedData.email,
                nic: submittedData.nic,
                education: submittedData.education,
                highSchool: submittedData.highSchool,
                city: submittedData.city,
                graduate: submittedData.graduate,
                diploma: submittedData.diploma,
                additionalInfo: submittedData.additionalInfo,
            });
        }
    }, [isEditing, submittedData]);

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create a new FormData object
        const formDataForSubmission = new FormData();

        // Append all form fields (excluding the CV file) to the FormData object
        for (const key in formData) {
            formDataForSubmission.append(key, formData[key]);
        }

        // Append the CV file to the FormData
        formDataForSubmission.append('cv', cvFile);

        axios
            .post("http://localhost:8070/recruit/recruitadd", formDataForSubmission)
            .then((response) => {
                alert("Recruit added successfully");
                setSubmittedData(response.data);
                setFormData({
                    fullName: '',
                    address: '',
                    email: '',
                    nic: '',
                    education: '',
                    highSchool: '',
                    city: '',
                    graduate: 'no',
                    diploma: '',
                    additionalInfo: '',
                });
            })
            .catch((error) => {
                alert("Error adding recruit: " + error.message);
            });
    };

    const handleDelete = () => {
        if (submittedData) {
            axios
                .delete(`http://localhost:8070/recruit/recruits/${submittedData._id}`)
                .then(() => {
                    alert("Recruit deleted successfully");
                    setSubmittedData(null);
                })
                .catch((error) => {
                    alert("Error deleting recruit: " + error.message);
                });
        }
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:8070/recruit/recruits/${submittedData._id}`, formData)
            .then((response) => {
                alert("Recruit updated successfully");
                setSubmittedData(response.data);
                setIsEditing(false);
            })
            .catch((error) => {
                alert("Error updating recruit: " + error.message);
            });
    };

    return (
        <div className="recruit-container">
            <h1>Application Form</h1>
            <form className="recruit-form" encType="multipart/form-data">
                <div className="form-field">
                    <label htmlFor="fullName">Full Name:</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="address">Address:</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="email">E-mail:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="nic">NIC:</label>
                    <input
                        type="text"
                        id="nic"
                        name="nic"
                        value={formData.nic}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="education">Education:</label>
                    <input
                        type="text"
                        id="education"
                        name="education"
                        value={formData.education}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="highSchool">High School:</label>
                    <input
                        type="text"
                        id="highSchool"
                        name="highSchool"
                        value={formData.highSchool}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="city">City:</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-field">
                    <label>Graduate:</label>
                    <div className="radio-container">
                        <label htmlFor="graduateYes" className="radio-label">
                            <input
                                type="radio"
                                id="graduateYes"
                                name="graduate"
                                value="yes"
                                checked={formData.graduate === 'yes'}
                                onChange={handleChange}
                            /> Yes
                        </label>
                        <label htmlFor="graduateNo" className="radio-label">
                            <input
                                type="radio"
                                id="graduateNo"
                                name="graduate"
                                value="no"
                                checked={formData.graduate === 'no'}
                                onChange={handleChange}
                            /> No
                        </label>
                    </div>
                </div>

                <div className="form-field">
                    <label htmlFor="diploma">Diploma:</label>
                    <input
                        type="text"
                        id="diploma"
                        name="diploma"
                        value={formData.diploma}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="additionalInfo">Additional Information (optional):</label>
                    <textarea
                        id="additionalInfo"
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <div className="form-field">
                    <label htmlFor="cv">CV (PDF or Word document):</label>
                    <input
                        type="file"
                        id="cv"
                        name="cv"
                        onChange={handleCvFileChange}
                    />
                </div>

                {isEditing ? (
                    <input className="submit-button" type="submit" value="Save" onClick={handleSave} />
                ) : (
                    <input className="submit-button" type="submit" value="Submit" onClick={handleSubmit} />
                )}
            </form>

            {submittedData && (
                <div className="submitted-data">
                    <h2>Submitted Data</h2>
                    <p>Full Name: {submittedData.fullName}</p>
                    <p>Address: {submittedData.address}</p>
                    <p>E-mail: {submittedData.email}</p>
                    <p>NIC: {submittedData.nic}</p>
                    <p>Education: {submittedData.education}</p>
                    <p>High School: {submittedData.highSchool}</p>
                    <p>City: {submittedData.city}</p>
                    <p>Graduate: {submittedData.graduate}</p>
                    <p>Diploma: {submittedData.diploma}</p>
                    <p>Additional Information: {submittedData.additionalInfo}</p>
                    <p>CV:</p>
                    {submittedData && submittedData.cv && (
                        <a className="download-link" href={`http://localhost:8070/${submittedData.cv}`} download>
                            Download CV
                        </a>
                    )}
                    <button className="edit-button" onClick={handleEdit}>Edit</button>
                    <button className="delete-button" onClick={handleDelete}>Delete</button>
                </div>
            )}
        </div>
    );
}
