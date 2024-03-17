import '../global_styles/form_control.scss';

import { useState } from 'react';

import AppSvg from '../svg/AppSvg';

export function FormControlLogin() {
    return (
        <div className='form-control__input-box'>
            <input type='text' placeholder='Введите логин' />
            <AppSvg className="form-control__input-box__form-icon" type="login" />
        </div>
    )
}

export function FormControlPswd({ placeholder }) {

    const [pswdVisible, setPswdVisible] = useState(false);

    return (
        <div className='form-control__input-box'>
            <input type={pswdVisible ? "text" : "password"} placeholder={placeholder} />
            <AppSvg onClick={() => setPswdVisible(!pswdVisible)} className="form-control__input-box__form-icon" type={pswdVisible ? "pswd-visible" : "pswd-not-visible"} />
        </div>
    )
}

export function FormControlSubmit({ children }) {
    return <input className='form-control__submit' value={children} type='submit' />
}

export function FormControlRange({ onChange }) {
    return <input className='form-control__range' type="range" min="1" max="2" step="0.01" onChange={onChange} />
}

export function FormControlFile({onChange}) {
    return (
        <label htmlFor='file' className="form-control__file">
            <input onChange={onChange} type="file" id="file" />
            <span className="form-control__file__file-btn">Выберите файл</span>
            <span className="form-control__file__file-text">Файл не выбран</span>
        </label>
    )
}

export function FormControlSubmitBtn({ children }) {
    return <button className='form-control__submit'>{children}</button>
}