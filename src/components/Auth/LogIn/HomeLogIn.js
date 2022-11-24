import MainButton from '../../Buttons/MainButton';
import TextInput from '../../Inputs/TextInput/TextInput';
import './HomeLogIn.scss';

function LogIn() {
  return (
    <div id="homepage-login">
      <TextInput placeholder="Enter your e-mail" type="email" />
      <MainButton primary> INICIAR SESIÓN</MainButton>
      <MainButton primary2> REGÍSTRATE</MainButton>
    </div>
  );
}

export default LogIn;
