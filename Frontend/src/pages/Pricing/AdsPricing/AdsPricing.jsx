import React from "react";
import "./AdsPricing.css";
import { useNavigate } from 'react-router-dom';


function AdsPricing() {
     const navigate = useNavigate();
  
  const handleEnquiryClick = () => {
    navigate('/contact');
    setIsMenuOpen(false);
};
  return (
    <>
      <div className="ads-pricing-page">
        <h1>Choose the best plan for your Digital Marketing</h1>
        <div className="ads-pricing-toggle">
          <button>Monthly</button>
          <button className="active">Annually (Save 35%)</button>
        </div>

        <div className="ads-pricing-plans">
          <div className="all-ads-pricing-section">
            <div className="plan">
              <h2>SEO</h2>
              <p className="price">₹9,999 per month</p>
              <button className="buy-now"  onClick={handleEnquiryClick}>Contact now</button>
              <ul>
                <li>On-page SEO optimization</li>
                <li>Backlink strategy</li>
                <li>Technical SEO audits</li>
                <li>Keyword research</li>
                <li className="highlight">SEO reports and analytics</li>
              </ul>
            </div>

            <div className="plan">
              <h2>Social Media Management</h2>
              <p className="price">₹15,999 per month</p>
              <button className="buy-now"  onClick={handleEnquiryClick}>Contact now</button>
              <ul>
                <li>Content creation and scheduling</li>
                <li>Engagement with followers</li>
                <li>Platform-specific strategies</li>
                <li>Performance tracking</li>
                <li className="highlight">Custom analytics report</li>
              </ul>
            </div>

            <div className="plan">
              <h2>Instagram Ads</h2>
              <p className="price">₹12,999 per campaign</p>
              <button className="buy-now"  onClick={handleEnquiryClick}>Contact now</button>
              <ul>
                <li>Targeted ads for higher ROI</li>
                <li>Creative ad design</li>
                <li>Performance optimization</li>
                <li>Real-time reporting</li>
                <li className="highlight">Custom audience targeting</li>
              </ul>
            </div>

            <div className="plan">
              <h2>Facebook Ads</h2>
              <p className="price">₹14,999 per campaign</p>
              <button className="buy-now"  onClick={handleEnquiryClick}>Contact now</button>
              <ul>
                <li>Targeted Facebook campaigns</li>
                <li>Creative ad visuals</li>
                <li>Conversion tracking</li>
                <li>Budget optimization</li>
                <li className="highlight">Detailed analytics and reports</li>
              </ul>
            </div>

            <div className="plan">
              <h2>Graphic Design</h2>
              <p className="price">₹19,999 per design</p>
              <button className="buy-now"  onClick={handleEnquiryClick}>Contact now</button>
              <ul>
                <li>Logo design</li>
                <li>Banner and flyer creation</li>
                <li>Social media graphics</li>
                <li>Brand identity design</li>
                <li className="highlight">Unlimited revisions</li>
              </ul>
            </div>

            <div className="plan">
              <h2>YouTube Ads</h2>
              <p className="price">₹25,999 per campaign</p>
              <button className="buy-now"  onClick={handleEnquiryClick}>Contact now</button>
              <ul>
                <li>Targeted video ad campaigns</li>
                <li>Creative video production</li>
                <li>Campaign optimization</li>
                <li>Audience targeting</li>
                <li className="highlight">YouTube analytics and reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdsPricing;
