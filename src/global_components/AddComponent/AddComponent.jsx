import React from 'react';
import AppSvg from '../../svg/AppSvg';
import './scss/AddComponent.scss';

const AddComponent = ({ type }) => {
  const [isSelected, setIsSelected] = React.useState(false);
  const [name, setName] = React.useState('');

  React.useEffect(() => {
    switch (type) {
      case 'cpuAdd':
        setName('Процессор');
        break;
      case 'motherboardAdd':
        setName('Материнская плата');
        break;
      case 'boxAdd':
        setName('Корпус');
        break;
      case 'gpuAdd':
        setName('Видеокарта');
        break;
      case 'coolingAdd':
        setName('Система охлаждения');
        break;
      case 'ramAdd':
        setName('Оперативная память');
        break;
      case 'storageAdd':
        setName('Хранение данных');
        break;
      case 'powerAdd':
        setName('Блок питания');
        break;
    }
  }, []);
  return (
    <div className="AddComponent-box">
      <AppSvg className="AddComponent-box_svg" type={type} />
      <p className="AddComponent-box_name">{name}</p>
      {!isSelected ? (
        <button className="AddComponent-box_btn">Выбрать</button>
      ) : (
        <button className="AddComponent-box_btn">Изменить</button>
      )}
    </div>
  );
};

export default AddComponent;
