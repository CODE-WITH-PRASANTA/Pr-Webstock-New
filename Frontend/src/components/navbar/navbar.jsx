import React, { useState } from 'react';
import './navbar.css';
import Logo from '../../assets/Logo.png';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaBriefcase } from 'react-icons/fa';
import pricingLogo from '../../assets/pricinglogo.png';
import contactLogo from '../../assets/contact-logo.png';
import adslogo from '../../assets/adslogo.png';

const Navbar = () => {
    const navigate = useNavigate();
    const [menu, setMenu] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMenuItemClick = (menuItem, route) => {
        setMenu(menuItem);
        navigate(route);         // Navigate to the specified route
        setIsMenuOpen(false);    // Close the menu after navigation
    };

    const handleContactClick = () => {
        navigate('/contact');
        setIsMenuOpen(false);
    };
    const handleLogoClick = () => {
        navigate('/');
        setIsMenuOpen(false);
    };

    return (
        <div className='navbar'>
            <div className="nav-container">
                <img src={Logo} alt="Logo" className='Logo' onClick={handleLogoClick}  />
                <div className={`nav-overlay ${isMenuOpen ? 'open' : ''}`} onClick={handleToggleMenu}>
                <button className="menu-toggle" onClick={handleToggleMenu}>
                    <span className="menu-icon"></span>
                    <span className="menu-icon"></span>
                    <span className="menu-icon"></span>
                </button>
                </div>
                <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => handleMenuItemClick("home", "/")}>
                            <FaHome className="nav-icon" /> Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => handleMenuItemClick("service", "/service")}>
                            <FaInfoCircle className="nav-icon" /> Service
                        </a>
                    </li>
                    {/* <li className="nav-item">
                        <a className="nav-link" onClick={() => handleMenuItemClick("projects", "/projects")}>
                            <FaBriefcase className="nav-icon" /> Projects
                        </a>
                    </li> */}
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => handleMenuItemClick("ads", "/ads")}>
                            <img src={adslogo} alt="Ads Logo" className="nav-icon" /> Ads
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => handleMenuItemClick("pricing", "/pricing")}>
                            <img src={pricingLogo} alt="Pricing Logo" className="nav-icon" /> Pricing
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => handleContactClick()}>
                            <img src={contactLogo} alt="Contact Logo" className="nav-icon" /> Contact
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
