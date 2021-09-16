import React from 'react';
import PropTypes from 'prop-types';

function ContactsTab({value}) {
  return (
    <div className={`contacts-tab ${value === '3' ? '' : 'visually-hidden'}`} id="txt_3">
      <h3 className="visually-hidden">Контакты</h3>
      <ul className="contacts-tab__list">
        <li className="contacts-tab__item">
          <span className="contacts-tab__block-title">Адрес</span>
          <p>Санкт-Петербург, набережная&nbsp;реки&nbsp;Карповки, дом 5</p>
        </li>
        <li className="contacts-tab__item">
          <span className="contacts-tab__block-title">Режим работы</span>
          <p>Ежедневно, с 10:00 до 21:00</p>
        </li>
        <li className="contacts-tab__item">
          <span className="contacts-tab__block-title">Телефон</span>
          <p>8 (800) 333-55-99</p>
        </li>
        <li className="contacts-tab__item">
          <span className="contacts-tab__block-title">E-mail</span>
          <p>info@avto-moto.ru</p>
        </li>
      </ul>
      <div className="contacts-tab__map-wrapper">
        <img className="contacts-tab__map-image" src={'img/map.jpg'} alt="Расположение на карте"/>
        <iframe
          className="contacts-tab__map-frame"
          title="map"
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad6fb545ae93a65d44e5a0a2f6f916f109943df6da8465d25b3675cd8ae0740d3&amp;source=constructor"
          width="431"
          height="271"
          frameBorder="0"
        >
        </iframe>
      </div>
    </div>
  );
}

ContactsTab.propTypes = {
  value: PropTypes.string.isRequired,
};

export default ContactsTab;
