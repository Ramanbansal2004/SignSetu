import React, { useState } from 'react';
import { FaBars, FaHome, FaUserAlt, FaInfoCircle } from 'react-icons/fa';
import '../Styles/Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="container">
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className="toggle-btn" onClick={toggleSidebar}>
          <FaBars />
        </div>
        <ul className="menu">
          <li><FaHome /> {isOpen && 'Home'}</li>
          <li><FaUserAlt /> {isOpen && 'Profile'}</li>
          <li><FaInfoCircle /> {isOpen && 'About'}</li>
        </ul>
      </div>
      <div className="main-content">
        <h1>Welcome</h1>
        <p>This is your main content area.</p>
      </div>
    </div>
  );
};

export default Sidebar;
