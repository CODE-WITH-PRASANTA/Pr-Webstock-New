import React, { useEffect } from 'react';
import './Projects.css';

// Importing images
import portfolioproject from '../../assets/Project-1.png';
import companyproject from '../../assets/Project-2.png';
import fooddelivery from '../../assets/Tomato_Food_Delivery_Website_Concept.jpg';
import travelprojects from '../../assets/Project-3.png';
import schoolclgprojects from '../../assets/clg-school website projects.png';
import pharamcyprojects from '../../assets/pharmasy-projects.png';
import blogmanagmentprojects from '../../assets/blogwebsite-projects.png';
import ecommerceprojects from '../../assets/Project-4.png';


// Ads Section 
import seoprojects from '../../assets/seoprojects.avif'
import instaadsprojects from '../../assets/instaadsprojects.avif'
import facebbookadsprojects from '../../assets/facebookadsprojects.jpg'
import linkedinproject from '../../assets/linkedinadsprojects.jpg'
import youtubeadsproject from '../../assets/youtubeadsproject.jpg'
import graphicdesign from '../../assets/graphicdesignproject.webp'
import canvaworkdesign from '../../assets/canvaprojects.webp'
import Quickdiscussionpage from '../Quickdiscussion/Quickdiscussionpage';



const projectData = [
  { img: portfolioproject, name: 'Internships Abroad', url: 'https://www.internsflyabroadgovt.com/' },
  { img: companyproject, name: 'Flynext', url: 'https://internflynext.com/' },
  { img: ecommerceprojects, name: 'SunLoc Space Real-Estate', url: 'https://sunlocspace.com/' },
  { img: fooddelivery, name: 'Food Delivery', url: 'https://tamato-food-delivery.netlify.app/' },
  { img: travelprojects, name: 'Unique Records of Universe', url: 'https://ouruniverse.in/' },
  { img: schoolclgprojects, name: 'School & College Websites', url: '/' },
  { img: pharamcyprojects, name: 'Pharmacy Projects', url: '/' },
  { img: blogmanagmentprojects, name: 'Blog Management', url: '/' },
];

const adsData = [
  { img: seoprojects, name: 'SEO Campaigns', url: '/' },
  { img: instaadsprojects, name: 'Instagram Ads', url: '/' },
  { img: facebbookadsprojects, name: 'Facebook Ads', url: '/' },
  { img: linkedinproject, name: 'LinkedIn Marketing', url: '/' },
  { img: youtubeadsproject, name: 'YouTube Ads', url: '/' },
  { img: graphicdesign, name: 'Graphic Design', url: '/' },
  { img: canvaworkdesign, name: 'Canva Design Projects', url: '/' },
];

const Projects = () => {
  useEffect(() => {
    const allImages = document.querySelectorAll('.project-image, .ads-image');
    let currentImage = 0;

    const cycleImages = () => {
      const nextImage = () => {
        allImages[currentImage].classList.remove('animate');
        currentImage = (currentImage + 1) % allImages.length;
        allImages[currentImage].classList.add('animate');
      };

      allImages[currentImage].classList.add('animate');
      const intervalId = setInterval(nextImage, 5000); // Changes every 5 seconds

      return () => {
        clearInterval(intervalId);
        allImages.forEach(img => img.classList.remove('animate'));
      };
    };

    cycleImages();
  }, []);

  return (
    <>
      <div className="project-header">
        <h1 className='projct-heading'>Our Recent Work</h1>
        <p>
          Here are a few past design projects I've worked on. Want to see more? 
          <a href="mailto:prwebstock.com@gmail.com">Email Me</a>.
        </p>

      </div>
      <div className="project-grid">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.img} alt={project.name} className="project-image" />
            <div className="project-info">
              <h3>{project.name}</h3>
              <a href={project.url} target="_blank" rel="noopener noreferrer">Visit</a>
            </div>
          </div>
        ))}
      </div>
      <Quickdiscussionpage />
      <div className="ads-header">
        <h2 className='ads-heading'>Featured Ads</h2>
        <p>Check out our latest advertising projects and campaigns <a href="/">Email Me</a>.</p>
      </div>
      <div className="ads-grid">
        {adsData.map((ad, index) => (
          <div key={index} className="ads-card">
            <img src={ad.img} alt={ad.name} className="ads-image" />
            <div className="ads-info">
              <h3>{ad.name}</h3>
              <a href={ad.url} target="_blank" rel="noopener noreferrer">Explore</a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;