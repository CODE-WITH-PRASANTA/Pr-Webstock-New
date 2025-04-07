import React from 'react';
import './Projects.css';

import projectbg1 from '../../assets/bg-service.png'
import ProjectBg from '../../assets/background-2-service.png'

// Assets for the Projects
import diamondCementLaptop from '../../assets/Payprime-laptop (1).png';
import diamondCementMobile from '../../assets/Payprime-Mobile.png';
import ghvmPuriLaptop from '../../assets/Payprime-laptop (1).png';
import ghvmPuriMobile from '../../assets/Payprime-Mobile.png';
import Inquery from '../../components/Inquery/Inquery';

const Projects = () => {
  return (

    <>
    <section className="Projects-section">
      <div className="Projects-content">
        <h1>Projects</h1>
        <p>Here are some of the amazing projects we've worked on</p>
      </div>
    </section>

    <div className="projects-section">
      <div className="projects-page-card">
        <div className="project-preview">
          <img src={diamondCementLaptop} alt="Diamond Cement Desktop" className="project-laptop" />
          <img src={diamondCementMobile} alt="Diamond Cement Mobile" className="project-mobile" />
        </div>
        <h3>Payprime Website<span className="tag industry">INDUSTRY</span></h3>
        <div className="project-buttons">
          <button className="website-btn">Website</button>
          <button className="mobile-btn">Mobile</button>
          <button className="link-btn">Link</button>
        </div>
      </div>
      
      <div className="projects-page-card">
        <div className="project-preview">
          <img src={ghvmPuriLaptop} alt="GHVM Puri Desktop" className="project-laptop" />
          <img src={ghvmPuriMobile} alt="GHVM Puri Mobile" className="project-mobile" />
        </div>
        <h3>GHVM Puri <span className="tag education">EDUCATION</span></h3>
        <div className="project-buttons">
          <button className="website-btn">Website</button>
          <button className="mobile-btn">Mobile</button>
          <button className="link-btn">Link</button>
        </div>
      </div>
      <div className="projects-page-card">
        <div className="project-preview">
          <img src={ghvmPuriLaptop} alt="GHVM Puri Desktop" className="project-laptop" />
          <img src={ghvmPuriMobile} alt="GHVM Puri Mobile" className="project-mobile" />
        </div>
        <h3>GHVM Puri <span className="tag education">EDUCATION</span></h3>
        <div className="project-buttons">
          <button className="website-btn">Website</button>
          <button className="mobile-btn">Mobile</button>
          <button className="link-btn">Link</button>
        </div>
      </div>
      <div className="projects-page-card">
        <div className="project-preview">
          <img src={ghvmPuriLaptop} alt="GHVM Puri Desktop" className="project-laptop" />
          <img src={ghvmPuriMobile} alt="GHVM Puri Mobile" className="project-mobile" />
        </div>
        <h3>GHVM Puri <span className="tag education">EDUCATION</span></h3>
        <div className="project-buttons">
          <button className="website-btn">Website</button>
          <button className="mobile-btn">Mobile</button>
          <button className="link-btn">Link</button>
        </div>
      </div>
      <div className="projects-page-card">
        <div className="project-preview">
          <img src={ghvmPuriLaptop} alt="GHVM Puri Desktop" className="project-laptop" />
          <img src={ghvmPuriMobile} alt="GHVM Puri Mobile" className="project-mobile" />
        </div>
        <h3>GHVM Puri <span className="tag education">EDUCATION</span></h3>
        <div className="project-buttons">
          <button className="website-btn">Website</button>
          <button className="mobile-btn">Mobile</button>
          <button className="link-btn">Link</button>
        </div>
      </div>
      <div className="projects-page-card">
        <div className="project-preview">
          <img src={ghvmPuriLaptop} alt="GHVM Puri Desktop" className="project-laptop" />
          <img src={ghvmPuriMobile} alt="GHVM Puri Mobile" className="project-mobile" />
        </div>
        <h3>GHVM Puri <span className="tag education">EDUCATION</span></h3>
        <div className="project-buttons">
          <button className="website-btn">Website</button>
          <button className="mobile-btn">Mobile</button>
          <button className="link-btn">Link</button>
        </div>
      </div>
    </div>
    <Inquery />
  </>
  );
};

export default Projects;
