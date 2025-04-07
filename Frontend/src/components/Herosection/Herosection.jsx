import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Herosection.css';
import heroimage from '../../assets/heroimg.png';
import aboutusimg from '../../assets/about.png'


const Herosection = () => {
  const navigate = useNavigate();

  // Function to navigate to the Contact Us page
  const handleContactClick = () => {
      navigate('/contact');
  };

  return (
    <>
    <div className="herosection">
    <div className="container">
      <div className="hero-left">
        <h4>Suggests a wide range of web development services</h4>
        <h1>Building the Future of Your Business with Web Development & Digital Marketing . . . . . . </h1>
        <p>
      <div className="hero-top">
        <img src={heroimage} alt="Jessica Alba" />
      </div>
        You can trust us without hesitation in the technology sector where we excel. Our exceptional team of mern stack and react.js specialist is here to provide you with top-notch services. Whether it's website development, mobile app development or digital marketing solutions, we employ cutting-edge techniques to deliver outstanding products to our clients.
        </p>
        <button className="contact-button" onClick={handleContactClick}>
                    Contact Us
         </button>
      </div>
      <div className="hero-right">
        <img src={heroimage} alt="Jessica Alba" />
      </div>
    </div>
    </div>

{/* About us page */}
<div className="about-section">
<div className="about-container">
            <h2 className="about-title">About Us</h2>
            <p className="about-mission">Our mission is Design the best websites around</p>
            <div className="about-content">
                <div className="about-text">
                    <h3>I'm In The Devlop Industry With 2 Years Of Experience.</h3>
                    <p>We are Prasanta Kumar, a skilled professional Web developer, and Rehan a dedicated Digital marketing specialist. Together, we create user-friendly, attractive, and effective websites for all needs. Our goal is to make your online presence seamless and engaging, with a focus on quality and performance. We combine development expertise and marketing know-how to build and optimize sites that work beautifully and capture attention. From simple websites to custom solutions, we’re here to help you succeed online. Partner with us for friendly service and reliable results you can trust. Let's create something amazing together!</p>
                    <div className="skills-section">
                        <h4>Professional Skills Work</h4>
                        <div className="skills">
                            {['Web Designing', 'App Designing', '! ADS & SEO', '3D Designing'].map((skill, index) => (
                                <div className="box" key={index}>
                                    <div className="bar">
                                        <canvas className="circle"></canvas>
                                        <span>{[95, 70, 95, 98][index]}%</span>
                                    </div>
                                    <p>{skill}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="about-image">
                    <img src={aboutusimg} alt="Profile" />
                    <div className="fl-about-img-content">
                        <h4>Prasanta Kumar Khuntia</h4>
                        <p>Mern Stack Developer</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
  );
};

export default Herosection;
