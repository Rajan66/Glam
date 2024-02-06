import React from 'react';

import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Footer content goes here */}
        <p>© {new Date().getFullYear()} GlamHour</p>
      </div>
    </footer>
  );
};

export default Footer;
