import MainButton from '../../Buttons/MainButton';
import './HomeLogIn.scss';

function LogIn() {
  return (
    <div id="homepage-login">
      <h3>Aquí va el componente de login</h3>
      <MainButton primary> INICIAR SESIÓN</MainButton>
      <MainButton primary2> REGÍSTRATE</MainButton>
    </div>
  );
}

export default LogIn;
