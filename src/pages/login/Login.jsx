import { NavLink } from 'react-router-dom';
import BackGroundSvg from '../../global_components/BackGroundSvg';
import {
  FormControlLogin,
  FormControlPswd,
  FormControlSubmit,
} from '../../global_components/form_control';
import './scss/login.scss';
import { useState } from 'react';

export default function Login() {
  const [loginStates, setLoginStates] = useState({
    login: '',
    password: '',
    error: null,
  });

  function handleInputChange(e) {
    setLoginStates({
      ...loginStates,
      [e.target.name]: e.target.value,
    });
  }

  function handleInputFocus() {
    if (loginStates.error) {
      setLoginStates({
        login: '',
        password: '',
        error: null,
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    //Роут для входа
  }

  return (
    <>
      <BackGroundSvg />
      <form className="login-box" onSubmit={handleSubmit}>
        <h1 className="login-box__note">Добро пожаловать в конфигуратор компьютера BeatGT!</h1>
        <FormControlLogin
          onFocus={handleInputFocus}
          value={loginStates.login}
          name="login"
          onChange={handleInputChange}
        />
        <FormControlPswd
          onFocus={handleInputFocus}
          value={loginStates.password}
          name="password"
          onChange={handleInputChange}
          placeholder="Введите пароль"
        />
        {loginStates.error && <p className="login-box__error-label">{loginStates.error}</p>}
        <FormControlSubmit>Войти</FormControlSubmit>
        <p className="login-box__link">
          {'Нет аккаунта? Создайте его! '}
          <NavLink to="/registration" className="login-box__link-active">
            Перейти к регистрации
          </NavLink>
        </p>
        <NavLink className="login-box__link login-box__link-active" to="/home">
          На главную страницу
        </NavLink>
      </form>
    </>
  );
}
