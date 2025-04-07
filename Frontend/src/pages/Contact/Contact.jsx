import React, { useState } from 'react';
import Swal from 'sweetalert2'; // Import SweetAlert2
import facebooklogo from '../../assets/facebooklogo.png';
import telegralogo from '../../assets/telegramlogo.png';
import instagramlogo from '../../assets/insatgramlogo.png';
import linkedinlogo from '../../assets/linkedinlogo.png';
import calllogo from '../../assets/calllogo.png';
import emaillogo from '../../assets/emaillogo.png';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare data for FormData
    const formDataObj = new FormData();
    formDataObj.append('firstName', formData.firstName);
    formDataObj.append('lastName', formData.lastName);
    formDataObj.append('email', formData.email);
    formDataObj.append('subject', formData.subject);
    formDataObj.append('message', formData.message);
    formDataObj.append('access_key', '7ea3f90e-a50c-40f3-9078-ba132a07a037'); // Add your provided access key

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      },
      body: formDataObj,
    }).then((response) => response.json());

    if (res.success) {
      // Show success message with Swal
      Swal.fire({
        title: "Thank uh!",
        text: "Your message has been sent successfully!",
        icon: "success",
      });

      setStatus('Message sent successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
      });
    } else {
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="contact-section">
      <h2 className="contact-title">Contact</h2>
      <p className="contact-subtitle">Home / Contact</p>
      <div className="contact-container">
        <div className="contact-form-container">
          <h3>Get In Touch</h3>
          <p>Drop me a message and I’ll get back to you</p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                required
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Your Subject"
                required
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter Your Message Here..."
              required
            ></textarea>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
          {status && <p>{status}</p>}
          <div className="social-icons">
            <p>Follow Us -</p>
            <a href="https://www.facebook.com/profile.php?id=61571173700125" target="_blank" rel="noopener noreferrer">
            <img src={facebooklogo} alt="Facebook" />
            </a>

            <a href="https://t.me/prwebstock" target="_blank" rel="noopener noreferrer">
            <img src={telegralogo} alt="Telegram" />
            </a>

            <a href="https://www.instagram.com/prwebstock.com_/" target="_blank" rel="noopener noreferrer">
              <img src={instagramlogo} alt="Instagram" />
            </a>

            <img src={linkedinlogo} alt="LinkedIn" />
          </div>
        </div>
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Drop me a message and I’ll get back to you</p>
          <div className="contact-detail">
            <div className="contact-item">
              <img src={emaillogo} alt="Email" />
              <span>prasantakhuntia2018@gmail.com</span>
            </div>
            <div className="contact-item">
              <img src={emaillogo} alt="Email" />
              <span>rehanshaikh9040@gmail.com</span>
            </div>
            <div className="contact-item">
              <img src={calllogo} alt="Call" />
              <span>+91 6372545244</span>
            </div>
            <div className="contact-item">
              <img src={calllogo} alt="Call" />
              <span>+91 9040318781</span>
            </div>
            <div className="contact-item address">
              <p>At :- Cuttack , Odisha , India , Pin :- 753003</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
