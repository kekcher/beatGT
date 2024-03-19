import logo from '../../img/beatGT_LOGO.jpg';
import './scss/Header.scss';

const Header = () => {
  return (
    <div className="header-box">
      <img className="header-box_logo" src={logo} alt="logo" />
      <h1 className="header-box_sign">Конфигуратор компьютера BeatGT</h1>
      <p className="header-box_sign-under">Собери компьютер своей мечты!</p>
      <div className="header-box_assemb-buttons">
        <button className="header-box_assemb-buttons_btn">Приступить к сборке ПК</button>
        <button className="header-box_assemb-buttons_btn">Мои сборки</button>
        <button className="header-box_assemb-buttons_btn">Быстрая сборка</button>
      </div>
      <div className="header-box_user-buttons">
        <button className="header-box_user-buttons_btn">Войти</button>
        <button className="header-box_user-buttons_btn">Зарегистрироваться</button>
      </div>
      <div className="header-box_user">
        <img className="header-box_user_avatar" src="/" alt="avatar" />
        <p className="header-box_user_nickname">НИК</p>
      </div>
      <div className="header-box_user-options">
        <li className="header-box_user-options_lst">
          <ul className="header-box_user-options_lst_element">Профиль</ul>
          <ul className="header-box_user-options_lst_element">Помощь</ul>
          <ul className="header-box_user-options_lst_element">Отзывы</ul>
        </li>
      </div>
    </div>
  );
};

export default Header;
