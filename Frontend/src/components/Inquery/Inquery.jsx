import React from 'react';
import './Inquery.css';
import sendarrow from '../../assets/send-arrow.png';

const Inquery = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Adding the Web3Forms access key
    formData.append("access_key", "7ea3f90e-a50c-40f3-9078-ba132a07a037");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (response.success) {
        alert("Your inquiry has been successfully sent!");
      } else {
        alert("There was an error sending your inquiry. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please check your connection and try again.");
    }
  };

  return (
    <div className="inquiry-container">
      <h2 className="inquiry-heading">Inquiry Now</h2>
      <div className="full-inquiry-section">
        <div className="inquiry-info">
          <h3>INQUIRY</h3>
          <h1>Let's get in touch</h1>
          <div className="contact-details">
            <div>
              <h4>India</h4>
              <p><a href="tel:+15596407400">+91 720-599-5722</a></p>
            </div>
            <div>
              <h4>INDIA</h4>
              <p><a href="tel:+917381067770">+91 637-254-5244</a></p>
            </div>
            <div>
              <h4>INDIA</h4>
              <p><a href="tel:+917064409530">+91 904-031-8781</a></p>
            </div>
            <div>
              <h4>SALES</h4>
              <p><a href="mailto:prwebstock.com@gmail.com">prwebstock.com@gmail.com</a></p>
            </div>
            <div>
              <h4>Employee</h4>
              <p><a href="mailto:prasantakhuntia2018@gmail.com">prasantakhuntia2018@gmail.com</a></p>
            </div>
            <div>
              <h4>Employee</h4>
              <p><a href="mailto:rehanshaikh9040@gmail.com">rehanshaikh9040@gmail.com</a></p>
            </div>
          </div>
          <div className="action-buttons">
            <a href="https://wa.me/7205995722" target="_blank" rel="noopener noreferrer" className="whatsapp-button">WhatsApp</a>
            <a href="tel:+91 9205995722" className="call-button">Call Now</a>
          </div>
        </div>
        <div className="inquiry-form">
          <h2>Hey! there</h2>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <div className="input-field">
                <label>Your name</label>
                <input type="text" name="name" placeholder="Enter your name" required />
              </div>
              <div className="input-field">
                <label>Email address</label>
                <input type="email" name="email" placeholder="Enter your email" required />
              </div>
            </div>
            <div className="form-group">
              <div className="input-field">
                <label>Phone number</label>
                <input type="tel" name="phone" placeholder="Enter your number" required />
              </div>
              <div className="input-field">
                <label>Subject</label>
                <input type="text" name="subject" placeholder="Enter your subject" />
              </div>
            </div>
            <div className="input-field full-width">
              <label>Message</label>
              <textarea name="message" placeholder="Enter your message" required></textarea>
            </div>
            <button type="submit" className="submit-button">
              <img src={sendarrow} alt="Send" className="send-icon" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Inquery;
