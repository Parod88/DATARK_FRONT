import React, { useEffect } from 'react';
import './HomePage.scss';
import HomeLogIn from '../Auth/LogIn/HomeLogIn';

function HomePage() {
  return (
    <div id="homepage">
      <h1 id="home-title">Welcome to creity</h1>
      <h3 id="home-subtitle">
        El diseño del proyecto arquitectónico como una conversación
      </h3>
      <HomeLogIn></HomeLogIn>
    </div>
  );
}

export default HomePage;
