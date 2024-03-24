import React from 'react';
import logo from '../../img/beatGT_LOGO.png';
import avatar from '../../img/ava.jpg';
import { NavLink } from 'react-router-dom';

import './scss/Header.scss';

const Header = () => {
  const [isAuthorized, setIsAuthorized] = React.useState(false);
  const [isMenuOpened, setIsMenuOpened] = React.useState(false);

  return (
    <div className="header-box">
      <img className="header-box_logo" src={logo} alt="logo" />
      <div className="header-box_signs">
        <h1 className="header-box_signs__header">Конфигуратор компьютера BeatGT</h1>
        <p className="header-box_signs__under">Собери компьютер своей мечты!</p>
      </div>
      <div className="header-box_assemb-buttons">
        <NavLink to="/create_assemb">
          <button className="header-box_assemb-buttons__btn">Приступить к сборке ПК</button>
        </NavLink>
        <button className="header-box_assemb-buttons__btn">Мои сборки</button>
      </div>
      {!isAuthorized ? (
        <div className="header-box_user-buttons">
          <NavLink to="/login">
            <button className="header-box_user-buttons__btn">Вход</button>
          </NavLink>
          <NavLink to="/registration">
            <button className="header-box_user-buttons__btn">Регистрация</button>
          </NavLink>
        </div>
      ) : (
        <div className="header-box_user-box">
          <p
            className="header-box_user-box__nickname"
            onClick={() => {
              setIsMenuOpened(!isMenuOpened);
            }}>
            НИК_ПУК
          </p>
          <img
            className="header-box_user-box__avatar"
            src={avatar}
            alt="avatar"
            onClick={() => {
              setIsMenuOpened(!isMenuOpened);
            }}
          />
        </div>
      )}
      {isMenuOpened ? (
        <div className="header-box_user-options">
          <li className="header-box_user-options__lst">
            <ul
              className="header-box_user-options__lst__elmnt"
              onClick={() => {
                setIsAuthorized(false);
              }}>
              Выйти из аккаунта
            </ul>
          </li>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
