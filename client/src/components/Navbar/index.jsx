import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo-md.png';

import Auth from '../../utils/auth';

function Navbar() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  
  if (Auth.loggedIn()) {
    return (
      // <>
      //   <Link to="/" to="/me">
      //     {Auth.getProfile().data.username}'s profile
      //   </Link>
      //   <button onClick={logout}>
      //     Logout
      //   </button>
      // </>

      <nav id="navbar" className="navbar navbar-expand-lg navbar-secondary bg-light">
    <div className="navCont container-fluid">
      <Link to="/duet" id="navLogo" className="navbar-brand"><img src={logo} alt="Duet logo"/></Link>
      <p id="loggedInAs">Logged in as <span id="username">{Auth.getProfile().data.username}</span> <button id="logoutBtn" onClick={logout}>
         Logout
      </button></p>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/feed" className="nav-link active">Potentials
              <span className="visually-hidden">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/matches" className="nav-link">Matches</Link>
          </li>
          <li className="nav-item">
            <Link to="/me" className="nav-link">My Profile</Link>
          </li>
        </ul>
      {/* </div> */}
    </div>
  </nav> 
    );
  }
  // If logged out show login controls
  return (

    <nav id="navv" className="navbar navbar-expand-lg navbar-secondary bg-light">
    <div className="navCont container-fluid">
      <Link id="navLogo" to="/duet" className="navbar-brand"><img src={logo}/></Link>
      {/* <div className="collapse navbar-collapse" id="navbarColor03"> */}
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link to="/login" className="nav-link active">Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/createprofile" className="nav-link">Sign Up</Link>
          </li>
        </ul>
      </div>
    {/* </div> */}
  </nav> 
  )
}

export default Navbar
