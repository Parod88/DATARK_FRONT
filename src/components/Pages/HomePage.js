import React, { useEffect } from 'react';
import './HomePage.scss';
import HomeLogIn from '../Auth/LogIn/HomeLogIn';
import GeneralLayout from '../GeneralLayout/GeneralLayout';

function HomePage() {
  return (
    <GeneralLayout>
      <>
        <div class="homepage">
          <h1 id="home-title">Welcome to</h1>
          <h1 id="home-title2">creity</h1>
          <h3 id="home-subtitle">
            El diseño del proyecto arquitectónico como una conversación
          </h3>
          <HomeLogIn></HomeLogIn>
        </div>
      </>
    </GeneralLayout>
  );
}

export default HomePage;
