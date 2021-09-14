import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <header className="page-header">
      <div className="page-header__wrapper">
        <div className="page-header__logo-wrapper">
          <Link className="page-header__logo-link" to="#">
            <img className="page-header__logo" src={'img/logo.svg'} width="134" height="55" alt="Логотип Авто Мото"/>
          </Link>
        </div>
        <nav className="main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <Link className="main-nav__link" to="#">Автомобили</Link>
            </li>
            <li className="main-nav__item">
              <Link className="main-nav__link" to="#">Контакты</Link>
            </li>
            <li className="main-nav__item">
              <Link className="main-nav__link" to="#">Услуги</Link>
            </li>
            <li className="main-nav__item">
              <Link className="main-nav__link" to="#">Вакансии</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;