import { NavLink } from 'react-router-dom';
import Header from '../../global_components/Header/Header';
import Footer from '../../global_components/Footer/Footer';
import UserAssemb from '../../global_components/UserAssemb/UserAssemb';
import './scss/home.scss';
import assembJpg from '../../img/assemb.jpg';
import ReactPaginate from 'react-paginate';
import React from 'react';

export default function Home() {
  const [assemb, setAssemb] = React.useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  ]);
  const [page, setPage] = React.useState(0);
  const cardsPerPage = 12;
  const numberOfRecordsVistited = page * cardsPerPage;
  const totalPages = Math.ceil(assemb.length / cardsPerPage);

  const changePage = ({ selected }) => {
    setPage(selected);
  };

  return (
    <>
      <Header />
      <div className="home-box">
        <h3 className="home-box_sign">
          Конфигуратор ПК поможет вам подобрать подходящие по цене комплектующие с проверкой их
          совместимости
        </h3>
        <div className="home-box_cont">
          {assemb
            .slice(numberOfRecordsVistited, numberOfRecordsVistited + cardsPerPage)
            .map((pc, key_) => {
              return <UserAssemb key={key_} />;
            })}
          <ReactPaginate
            breakLabel="..."
            nextLabel="Далее >"
            onPageChange={changePage}
            pageRangeDisplayed={cardsPerPage}
            pageCount={totalPages}
            previousLabel="< Назад"
            renderOnZeroPageCount={null}
            containerClassName={'navigationButtons'}
            previousLinkClassName={'previousButton'}
            nextLinkClassName={'nextButton'}
            disabledClassName={'navigationDisabled'}
            activeClassName={'navigationActive'}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
