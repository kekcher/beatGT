import React from 'react';
import AppSvg from '../../svg/AppSvg';
import './scss/UserAssemb.scss';

const UserAssemb = ({ imgSrc, name, price, likes }) => {
  const [like, setLike] = React.useState(false);
  const [data, setData] = React.useState({
    cpu: 'cpuaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    motherboard: 'motherboard',
    gpu: 'gpu',
    box: 'box',
    ram: 'ram',
    storage: 'storage',
    cooling: 'cooling',
    power: 'power',
  });

  return (
    <div className="user-assemb-box">
      <div className="user-assemb-box_top">
        <img src={imgSrc} className="user-assemb-box_top__img" alt="user_assemb_photo" />

        <h3 className="user-assemb-box_top__mid__name">
          Название:
          {name}
        </h3>
        <ul className="user-assemb-box_top__mid__list">
          <li className="user-assemb-box_top__mid__list__elmnt">Процессор: {data.cpu}</li>
          <li className="user-assemb-box_top__mid__list__elmnt">
            Материнская плата: {data.motherboard}
          </li>
          <li className="user-assemb-box_top__mid__list__elmnt">Видеокарта: {data.gpu}</li>
          <li className="user-assemb-box_top__mid__list__elmnt">Корпус: {data.box}</li>
          <li className="user-assemb-box_top__mid__list__elmnt">Оперативная память: {data.ram}</li>
          <li className="user-assemb-box_top__mid__list__elmnt">Хранение данных: {data.storage}</li>
          <li className="user-assemb-box_top__mid__list__elmnt">
            Система охлаждения: {data.cooling}
          </li>
          <li className="user-assemb-box_top__mid__list__elmnt">Блок питания: {data.power}</li>
        </ul>
        <div className="user-assemb-box_top__right">
          <p className="user-assemb-box_top__right__pricesign">Стоимость:</p>
          <p className="user-assemb-box_top__right__pricevalue">{price} ₽</p>
          <button className="user-assemb-box_top__right__btn">
            Подробнее
            <br />о сборке
          </button>
          <button className="user-assemb-box_top__right__btn">
            Сохранить
            <br />
            сборку
          </button>
        </div>
      </div>
      <div className="user-assemb-box_bottom">
        <div className="user-assemb-box_bottom__cont">
          <AppSvg
            onClick={() => {
              setLike(!like);
            }}
            className={like ? 'like-set-svg' : 'like-svg'}
            type={like ? 'like-set' : 'like'}
          />
          {likes > 0 ? <p className="user-assemb-box_bottom__cont__count">{likes}</p> : null}
        </div>
      </div>
    </div>
  );
};

export default UserAssemb;
