import { NavLink } from 'react-router-dom';
import Header from '../../global_components/Header/Header';
import Footer from '../../global_components/Footer/Footer';
import UserAssemb from '../../global_components/UserAssemb/UserAssemb';
import './scss/create_assemb.scss';
import assembJpg from '../../img/assemb.jpg';
import React from 'react';
import AddComponent from '../../global_components/AddComponent/AddComponent';

export default function CreateAssemb() {
  return (
    <>
      <Header />
      <div className="CreateAssemb-box">
        <h3 className="CreateAssemb-box_sign">
          Здесь вы можете выбрать комплектующие для вашей сборки
        </h3>
        <div className="CreateAssemb-box_cont">
          <AddComponent type="cpuAdd" />
          <AddComponent type="motherboardAdd" />
          <AddComponent type="boxAdd" />
          <AddComponent type="gpuAdd" />
          <AddComponent type="coolingAdd" />
          <AddComponent type="ramAdd" />
          <AddComponent type="storageAdd" />
          <AddComponent type="powerAdd" />
        </div>
      </div>
      <Footer />
    </>
  );
}
