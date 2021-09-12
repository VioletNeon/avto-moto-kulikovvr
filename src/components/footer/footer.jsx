import React from 'react';
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <footer className="page-footer">
      <div className="page-footer__wrapper">
        <ul className="page-footer__nav-list">
          <li className="page-footer__nav-item">
            <Link to="#">Корпоративным клиентам</Link>
          </li>
          <li className="page-footer__nav-item">
            <Link to="#">Клиентам</Link>
          </li>
          <li className="page-footer__nav-item">
            <Link to="#">Аренда авто</Link>
          </li>
          <li className="page-footer__nav-item">
            <Link to="#">Каршеринг</Link>
          </li>
          <li className="page-footer__nav-item">
            <Link to="#">Как продать авто</Link>
          </li>
          <li className="page-footer__nav-item">
            <Link to="#">Trade-in</Link>
          </li>
          <li className="page-footer__nav-item">
            <Link to="#">Test drive</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;