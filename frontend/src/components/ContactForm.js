import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log("Submitting contact form:", formData); // ✅ Debugging: Log the data before sending
    
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/contact`, 
        formData,
        { headers: { 'Content-Type': 'application/json' } } // ✅ Ensure correct headers
      );

      console.log("Response from backend:", response.data);
      setSuccessMessage(response.data.message || "Message sent successfully!");
      setFormData({ name: '', email: '', message: '' });

      // Hide success message after 10 seconds
      setTimeout(() => setSuccessMessage(''), 10000);
    } catch (error) {
      console.error("Error sending message:", error.response ? error.response.data : error.message);
      setSuccessMessage('Failed to send message');
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
        <textarea 
          name="message" 
          placeholder="Your Message" 
          value={formData.message} 
          onChange={handleChange} 
          required 
        />
        <button type="submit">Send</button>
      </form>
      {successMessage && (
        <div className="success-message">
          {successMessage}
        </div>
      )}
    </div>
  );
};

export default ContactForm;
// import React, { useState } from 'react';
// import axios from 'axios';
// import '../App.css';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [successMessage, setSuccessMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/contact`, {
//         name: formData.name,
//         email: formData.email,
//         message: formData.message
//       });
      
//       console.log('Response:', response.data);
//       setSuccessMessage(response.data.message);
//       setFormData({ name: '', email: '', message: '' });
//       setTimeout(() => setSuccessMessage(''), 10000);
//     } catch (error) {
//       console.error('Error sending message:', error);
//       setSuccessMessage('Failed to send message');
//     }
//   };

//   return (
//     <div className="contact-container">
//       <h2>Contact Us</h2>
//       <form onSubmit={handleSubmit} className="contact-form">
//         <input 
//           type="text" 
//           name="name" 
//           placeholder="Your Name" 
//           value={formData.name} 
//           onChange={handleChange} 
//           required 
//         />
//         <input 
//           type="email" 
//           name="email" 
//           placeholder="Your Email" 
//           value={formData.email} 
//           onChange={handleChange} 
//           required 
//         />
//         <textarea 
//           name="message" 
//           placeholder="Your Message" 
//           value={formData.message} 
//           onChange={handleChange} 
//           required 
//         />
//         <button type="submit">Send</button>
//       </form>
//       {successMessage && (
//         <div className="success-message">
//           {successMessage}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ContactForm;