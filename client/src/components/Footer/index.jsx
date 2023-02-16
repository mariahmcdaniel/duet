import React from "react";
import "./style.css";
import logo from './logo.png'

const year = new Date().getFullYear();

  return (
    <footer>
      <img id='footerLogo'
          src={logo}
          alt='Duet Logo'/>
      
      {`Copyright © Duet ${year}`}
    </footer>
  );

export default Footer;
