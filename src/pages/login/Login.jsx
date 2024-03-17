import { NavLink } from 'react-router-dom';
import BackGroundSvg from '../../global_components/BackGroundSvg';
import { FormControlLogin, FormControlPswd, FormControlSubmit } from '../../global_components/form_control';
import './scss/login.scss';

export default function Login() {
    return (
        <>
            <BackGroundSvg />
            <form className='login-box' onSubmit={(e) => { e.preventDefault() }}>
                <h1 className='login-box__note'>Добро пожаловать в конфигуратор компьютера BeatGT!</h1>
                <FormControlLogin />
                <FormControlPswd placeholder="Введите пароль"/>
                <FormControlSubmit>Войти</FormControlSubmit>
                <p className='login-box__link'>{'Нет аккаунта? Создайте его! '}<NavLink to="/registration" className="login-box__link-active">Перейти к регистрации</NavLink></p>
                <NavLink className='login-box__link login-box__link-active' to="/home">На главную страницу</NavLink>
            </form>
        </>
    )
}