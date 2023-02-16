import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import Navbar from '../Navbar';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  
  if (Auth.loggedIn()) {
  return (
    <header>
        <Navbar />
    </header>
  );
  }
   
  return (
    <header>
      <div>
        <Navbar />
      </div>
    </header>
  );

};

export default Header;
