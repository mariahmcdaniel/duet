// Node Modules
import React, { useRef } from 'react';
// Utilities
import Auth from '../../utils/auth';
import './style.css';

const Home = () => {
  return (
    <main>
      <div className="homeContainer d-flex justify-content-center">
        <div id="homeRow" className="row d-flex">
          <div id="match" className="homeCol col-2">
            <div>Meet your musical match...</div>
          </div>
          <div id="pitch" className="homeCol col-2">
            <div>...Make your perfect pitch...</div>
          </div>
          <div id="then" className="homeCol col-2">
            <div>...then <span id="thenDuet">Duet</span></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
