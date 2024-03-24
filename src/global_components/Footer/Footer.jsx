import React from 'react';
import './scss/Footer.scss';

const Footer = () => {
  return (
    <div className="footer-box">
      <p className="footer-box_sign">
        Copyright @2024 <strong>BeatGT.</strong> All Rights Reserved
      </p>
      <p className="footer-box_users">Пользователей зарегестрировано: 0</p>
      <p className="footer-box_assembcount">Всего сборок создано: 0</p>
    </div>
  );
};

export default Footer;
