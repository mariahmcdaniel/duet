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
      <div>
      <button onClick={logout}>
         Logout
      </button>
      </div>
      <div>
      Logged in as {Auth.getProfile().data.username}
        <Navbar />
      </div>
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
