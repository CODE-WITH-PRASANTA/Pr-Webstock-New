import React from 'react';
import './service.css';


// Import images
import servicebg from '../../assets/bg-service.png';
import apidevelopment from '../../assets/Api-Development-2.png';
import webdevelopment from '../../assets/Web-Development-2 service.png';
import digitalmarketing from '../../assets/didgitalmarketing-service.png';
import appdevelopment from '../../assets/mobile-app-service.png';
import socialmedia from '../../assets/Social-Media-service.png';
import webapp from '../../assets/product-development.png';
import Scatchwebsiteservice from '../../assets/Scatch-website.png';
import Requirement from '../../components/Requirementsec/Requirement';
import seoservice from '../../assets/seo-service-01.png'

const Service = () => {
  return (
    <div className="service-section">
      {/* Header Section */}
      <div className="service-header">
          <h1>SERVICES</h1>
          <p>We believe in investing in people and building meaningful bonds</p>
      </div>

      {/* Service Cards */}
      <div className="service-cards">
         {/* Custom Website Development (Scratch Website) */}
         <div className="service-card">
         <img src={Scatchwebsiteservice} alt="Custom Website Development" className="service-image" />
         <h2 className="custom-website-heading">Custom Website Development</h2>
          <p>
            Whether you need a basic website or a complex, feature-rich platform, we offer custom website design and development tailored to your business needs. From e-commerce sites to corporate portals, we work closely with you to bring your vision to life.
          </p>
          <p>
            We provide flexible, creative, and scalable web solutions, ensuring your website meets all your business objectives, is fully optimized, and gives a great user experience.
          </p>
        </div>
        
        {/* Existing Service Cards */}
        <div className="service-card">
          <img src={webdevelopment} alt="Enterprise Integration" className="service-image" />
          <h2 className='enterprise-coustom-heading'>Enterprise Integration</h2>
          <p>
            CredenceSoft Pvt Ltd has vast experience in System Integration with middleware tools such as Oracle SOA Suite, MuleSoft, Apache Camel, and Java. To design and build fast, lightweight integration with open source, cost-effective, and cloud-based solutions, speak to one of our Integration Consultants or send us an inquiry, and we will be in touch within 24 hours.
          </p>
          <p>
            Integration refers to the process by which multiple individual subsystems or sub-components are combined into one larger system, allowing them to function together.
          </p>
        </div>

        <div className="service-card">
        <img src={webapp} alt="Web App Development" className="service-image" />
        <h2 className="web-app-heading">Web App Development</h2>
          <p>
            We use the latest JavaScript frameworks like ReactJS, Angular, and Vue.js, along with PHP and Java-based tools to build scalable, robust web applications that are tailored to your business needs.
          </p>
          <p>
            We offer custom web solutions that enhance your online presence and improve operational efficiency.
          </p>
        </div>

        <div className="service-card">
        <img src={apidevelopment} alt="API Development" className="service-image" />
        <h2 className="api-development-heading">API Development</h2>
          <p>
            We specialize in API (Application Programming Interface Software) design and development with open-source technology such as Node.js and Java [Spring Boot]. These APIs allow different apps or platforms to communicate, sharing services and features.
          </p>
          <p>
            A great API encourages developers to use and share it, creating a cycle where each successful implementation leads to greater engagement.
          </p>
        </div>

        <div className="service-card">
          <img src={digitalmarketing} alt="Digital Marketing" className="service-image" />
          <h2 className='digital-coustom-heading'>Digital Marketing</h2>
          <p>
            Reach the right audience at the right time with digital marketing strategies. Digital marketing enables interaction with prospects, personalization of content, and real-time tracking of responses.
          </p>
          <p>
            We help businesses leverage digital marketing channels to build relationships, increase brand visibility, and drive conversions.
          </p>
        </div>

        <div className="service-card">
        <img src={appdevelopment} alt="Mobile App Development" className="service-image" />
        <h2 className="mobile-app-heading">Mobile App Development</h2>
          <p>
            We help businesses build hybrid mobile apps using frameworks like Ionic and React Native. We manage all stages of the development process, from wireframing to deployment.
          </p>
          <p>
            "Mobile Is Where Your Audience Lives" – let us help you design seamless mobile experiences that engage users and increase productivity.
          </p>
        </div>
        <div className="service-card">
          <img src={seoservice} alt="Social Media Management" className="service-image" />
          <h2 className='SEO-coustom-heading'>SEO</h2>
          <p>
          SEO (Search Engine Optimization) should be used when you wish to get to the top of the search engine and/or to remain at the top. This is not something that happens overnight, it requires an SEO strategy that uses many key elements in order to achieve this. However, when you’ve achieved this, you can enjoy long-lasting benefits. By using SEO strategy, your website rank improves, which means more visitors will find your pages in search results. With broader exposure and traffic to your high-value content, more sites will link to your pages, which increases your authority and credibility, which leads to improvement in your website rank.
          </p>
        </div>
        
        <div className="service-card">
          <img src={socialmedia} alt="Social Media Management" className="service-image" />
          <h2 className='socialmedia-coustom-heading'>Social Media Management</h2>
          <p>
          We manage your social media presence on popular platforms like Facebook, Instagram, Twitter, and LinkedIn to help grow your online brand and connect with your audience effectively. Our team takes a holistic approach, creating and curating high-quality, engaging content that aligns with your brand’s voice and goals.
            In addition to publishing regular posts, we conduct in-depth engagement analysis to understand what resonates best with your followers, allowing us to refine your social media strategy for maximum reach and impact. We also monitor trends and respond to real-time engagement, ensuring your brand remains relevant and responsive. From crafting visually appealing posts and compelling captions to implementing targeted campaigns and measuring ROI, we provide end-to-end social media management that drives visibility, builds brand loyalty, and ultimately boosts conversions.
          </p>
        </div>
        
      </div>
      <Requirement />
    </div>

  );
};

export default Service;
