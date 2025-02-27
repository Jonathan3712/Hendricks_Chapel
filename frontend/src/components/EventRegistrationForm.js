import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', graduationYear: '' });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const response = await axios.post('http://localhost:4000/api/register', formData);
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/contact`, formData);
      console.log("Sending data:", formData);
      // `${process.env.REACT_APP_BACKEND_URL}/api/contact`, formData
      setSuccessMessage(response.data.message);
      setFormData({ firstName: '', lastName: '', graduationYear: '' });

      // Clear the success message after 10 seconds
      setTimeout(() => {
        setSuccessMessage('');
      }, 10000);
    } catch (error) {
      console.error('Error registering:', error);
      setSuccessMessage('Failed to register');
    }
  };

  return (
    <div className="registration-container">
      <h2>Event Registration</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        <input 
          type="text" 
          name="firstName" 
          placeholder="First Name" 
          value={formData.firstName} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="text" 
          name="lastName" 
          placeholder="Last Name" 
          value={formData.lastName} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="number" 
          name="graduationYear" 
          placeholder="Graduation Year" 
          value={formData.graduationYear} 
          onChange={handleChange} 
          required 
        />
        <button type="submit">Register</button>
      </form>
      {successMessage && (
        <div className="success-message animate-fade">
          {successMessage}
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;