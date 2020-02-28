import React from 'react';
import './Footer.css';

const Footer = ({ title = '', button }) => (
  <div id='footer'>
    <center>
      {title}
      {button && button}
    </center>
  </div>
);

export default Footer;