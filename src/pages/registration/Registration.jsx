
import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import BackGroundSvg from "../../global_components/BackGroundSvg"
import AvatarEditor from 'react-avatar-editor';
import {
    FormControlLogin,
    FormControlPswd,
    FormControlSubmit,
    FormControlRange,
    FormControlFile,
    FormControlSubmitBtn
} from '../../global_components/form_control';

import AppSvg from '../../svg/AppSvg';
import { AppContext } from '../../App';

import "./scss/registration.scss";

export default function Registration() {
    const [image, setImage] = useState(null);
    const [scale, setScale] = useState(1);
    const [regWindow, setRegWindow] = useState(true);
    const { deviceSize } = useContext(AppContext);

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleScale = (e) => {
        const scale = parseFloat(e.target.value);
        setScale(scale);
    };
    return (
        <>
            <BackGroundSvg />
            <div className='registration-container'>
                <form className={deviceSize < 1024 && !regWindow ? 'registration-container__form_none' : 'registration-container__form'}>
                    <h1 className='registration-container__form__note'>Регистрация</h1>
                    <FormControlLogin />
                    <FormControlPswd placeholder='Введите пароль' />
                    <FormControlPswd placeholder='Повторите пароль' />
                    <FormControlSubmit>Зарегистрироваться</FormControlSubmit>
                    <p className='registration-container__form__link'>{'Есть аккаунт? Войдите в него! '}<NavLink to="/login" className="registration-container__form__link-active">Перейти к входу</NavLink></p>
                    <NavLink className='registration-container__form__link registration-container__form__link-active' to="/home">На главную страницу</NavLink>
                </form>
                <div className={deviceSize < 1024 && regWindow ? 'registration-container__avatar-box_none' : 'registration-container__avatar-box'}>
                    <h1 className='registration-container__form__note'>Выберите аватар</h1>
                    <FormControlFile onChange={handleImageChange} />
                    {image && (
                        <AvatarEditor
                            image={image}
                            width={200}
                            height={200}
                            border={20}
                            borderRadius={100}
                            color={[255, 255, 255, 0.4]}
                            scale={scale}
                            rotate={0}
                        />
                    )}
                    <FormControlRange onChange={handleScale} />
                    <FormControlSubmitBtn>Сохранить</FormControlSubmitBtn>
                </div>
            </div>
            {
                deviceSize < 1024 && (
                    <div className='choose-box'>
                        <AppSvg onClick={() => setRegWindow(!regWindow)} className="row-svg" type='left-row' />
                        <AppSvg onClick={() => setRegWindow(!regWindow)} className="row-svg" type='right-row' />
                    </div>
                )
            }
        </>
    );
}