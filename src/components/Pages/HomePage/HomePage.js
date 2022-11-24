import React, { useEffect } from 'react';
import './HomePage.scss';
import HomeLogIn from '../../Auth/LogIn/HomeLogIn';
import GeneralLayout from '../../GeneralLayout/GeneralLayout';
import TextInput from '../../Inputs/TextInput/TextInput';
import MainButton from '../../Buttons/MainButton';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <GeneralLayout>
      <>
        <div className="homepage">
          <h1 id="home-title">Welcome to</h1>
          <h1 id="home-title2">creity</h1>
          <h3 id="home-subtitle">
            El diseño del proyecto arquitectónico como una conversación
          </h3>
          <div id="homepage-login">
            <TextInput placeholder="Enter your e-mail" type="email" />
            <MainButton primary> INICIAR SESIÓN</MainButton>
            <Link to={'/signUp'}>
              <MainButton primary2> REGÍSTRATE</MainButton>
            </Link>
          </div>
          <div id="social-links">
            <span id="social-links-title">CONTINUA CON</span>
            <div id="social-font">
              <span>S</span>
              <span>Z</span>
              <span>Q</span>
              <span>P</span>
            </div>
          </div>
        </div>
      </>
    </GeneralLayout>
  );
}

export default HomePage;
