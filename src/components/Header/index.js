import React from 'react';
import './Header.css';

const Header = ({ title = '', button }) => (
  <div id='header'>
    <center>
      {title}
      {button && button}
    </center>
  </div>
);

export default Header;