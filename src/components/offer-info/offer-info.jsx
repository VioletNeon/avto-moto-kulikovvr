import React from 'react';
import {Link} from 'react-router-dom';

function OfferInfo() {
  return (
    <section className="offer-info-section">
      <h2 className="offer-info-section__title">Марпех 11</h2>
      <ul className="offer-info-section__parameters-list">
        <li className="offer-info-section__parameters-item">
          <svg width="53" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity=".5">
              <rect x="16.7" y="10.8" width="10.9" height="19.9" rx="1.3" stroke="#48494D" strokeWidth="1.5"/>
              <mask id="a" fill="#fff">
                <rect x="18.1" y="13.1" width="8.3" height="7.2" rx="1"/>
              </mask>
              <rect x="18.1" y="13.1" width="8.3" height="7.2" rx="1" stroke="#48494D" strokeWidth="3" mask="url(#a)"/>
              <path d="M28 20.8v0c1.1 0 2 1 2 2.2v2.6c0 1.4.6 3.5 2.6 3.3 2-.2 2.3-2.2 2.3-3.6 0-1.5-.7-4.7-.5-7.3.2-2.7 1.8-5 3-6" stroke="#48494D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="15.5" y="30.5" width="13.4" height="1" rx=".5" fill="#48494D" stroke="#48494D"/>
              <path d="M35.4 15.5c1 .2 1.5 1 1.5 2l-.1.9c-.1.9-.9 1.6-1.8 1.6" stroke="#48494D" strokeWidth="1.5"/>
            </g>
          </svg>
          <p>бензин</p>
        </li>
        <li className="offer-info-section__parameters-item">
          <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity=".5" stroke="#48494D" strokeWidth="1.5">
              <path d="M11.2 20h17.6"/>
              <path d="M11.2 20h17.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20 14.5v11"/>
              <path d="M20 14.5v11" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M28.8 14.5V20"/>
              <path d="M28.8 14.5V20" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11.2 14.5v11"/>
              <path d="M11.2 14.5v11M11.2 14.5a2.7 2.7 0 1 0 0-5.3 2.7 2.7 0 0 0 0 5.3ZM20 14.5a2.7 2.7 0 1 0 0-5.3 2.7 2.7 0 0 0 0 5.3ZM28.8 14.5a2.7 2.7 0 1 0 0-5.3 2.7 2.7 0 0 0 0 5.3ZM11.2 30.8a2.7 2.7 0 1 0 0-5.3 2.7 2.7 0 0 0 0 5.3ZM20 30.8a2.7 2.7 0 1 0 0-5.3 2.7 2.7 0 0 0 0 5.3Z" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
          </svg>
          <p>механика</p>
        </li>
        <li className="offer-info-section__parameters-item">
          <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.8 10.5h2l2 .2h.6a.2.2 0 0 1 .2.3c-.4.6-.4 2-.4 3.4.1 2 .2 4-.8 5-.3.4-.8.5-1.4.5-.5 0-.9-.9-1.3-1.9-.3-1-.7-2.1-1.3-2.1-1.7 0-2.3 3-.9 5.5l3.1 5.3a1.2 1.2 0 0 1-1 1.7c-.3 0-.6-.1-.9-.4l-4.5-4.8a23 23 0 0 0-9.8.1L10 28a1.1 1.1 0 0 1-1.6.2c-.4-.4-.6-1-.3-1.5l3-5c.2-2.8 0-3.7-.3-4h-.2c-.3 0-.5 0-.7.2-.7.8-.8 2.6-.8 3.7l-.2.2h-.6c-.8 0-1.4-.1-1.7-.5-.2-.3-.3-.7-.1-1.4 0-.5.2-1.5.7-2.3.7-1 1.7-1.6 3-1.6h.4c.4 0 .8.2 1 .4.4.1.6.3 1 .3l.4-.1c1-.5 2.3-.7 3.7-.7a18 18 0 0 1 2.5.2c1.8 0 2.5-1 3.4-2.3.6-.9 1.4-2 2.7-2.6 1-.5 2-.7 3.5-.7Zm0-1.5c-1.7 0-3 .3-4.2.9-1.6.8-2.5 2-3.2 3-.9 1.3-1.2 1.7-2.2 1.7h-.4l-2.1-.2c-1.6 0-3 .3-4.2.8l-.1-.1a4 4 0 0 0-2.2-.6c-1.8 0-3.3.8-4.2 2.3-.7 1-.9 2.3-1 2.8 0 .5-.3 1.7.5 2.6.7 1 1.8 1 2.8 1h.2L6.9 26a2.6 2.6 0 0 0 4.2 3l4.1-4.4a22.4 22.4 0 0 1 8.2 0l4.2 4.4a2.6 2.6 0 0 0 3.3.6 2.6 2.6 0 0 0 1-3.6l-3-5.3c-.6-1-.7-1.9-.7-2.5l.2.3c.5 1.4 1 3 2.6 3 1 0 1.9-.4 2.5-1 1.4-1.5 1.3-3.8 1.2-6.1l.1-2.6c.3-.6.4-1.2 0-1.8a1.7 1.7 0 0 0-1.5-.8h-.6L31 9 28.8 9" fill="#48494D" opacity=".5"/>
          </svg>
          <p>100 л.с.</p>
        </li>
        <li className="offer-info-section__parameters-item">
          <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity=".5" fill="#48494D">
              <path d="M34 17.3s-.3 0-.4-.2l-6.8-6.8a.7.7 0 0 1 1-1l6.8 6.9a.7.7 0 0 1-.5 1.1M32.5 19c-.2 0-.4-.1-.5-.3L25.2 12a.7.7 0 1 1 1-1l6.7 6.9a.7.7 0 0 1-.4 1.1M31 20.5l-.5-.2-6.8-6.8a.7.7 0 0 1 .9-1l6.8 6.8a.7.7 0 0 1-.5 1.2"/>
              <path d="m22.5 18.3-.4-.2a.7.7 0 0 1 0-1l2.8-2.9a.7.7 0 0 1 1 1L23 18l-.5.2M26.3 22 26 22a.7.7 0 0 1 0-1l2.8-2.9a.7.7 0 0 1 1 1l-2.9 2.9-.5.2M32.2 13.6a1.3 1.3 0 1 1-2-1.8 1.3 1.3 0 0 1 2 1.8ZM6 17.3a.7.7 0 0 1-.6-1.1l6.8-6.8a.7.7 0 0 1 1 1L6.4 17l-.5.2M7.5 19a.7.7 0 0 1-.4-1.2l6.8-6.8a.7.7 0 0 1 .9 1L8 18.6c-.1.2-.3.2-.5.2M9 20.5a.7.7 0 0 1-.4-1.2l6.8-6.8a.7.7 0 0 1 1 1l-6.9 6.8-.4.2"/>
              <path d="M13.7 22c-.2 0-.4 0-.5-.2L10.3 19a.7.7 0 1 1 1-1L14 21a.7.7 0 0 1-.4 1.1M17.5 18.2l-.5-.1-2.9-3a.7.7 0 1 1 1-.9l2.8 2.9a.7.7 0 0 1-.4 1.1M9.7 11.8a1.3 1.3 0 1 1-1.9 1.8 1.3 1.3 0 0 1 2-1.8Z"/>
              <path d="M20 31.4a7.5 7.5 0 0 1-5.3-12.8A7.5 7.5 0 1 1 20 31.4Zm0-13.6a6.1 6.1 0 0 0-4.3 10.5A6.2 6.2 0 1 0 20 17.8Zm4.8 11Z"/>
              <path d="M12 26.5h-1.2c-1 0-1.7-.7-1.7-1.6v-2c0-.9.8-1.6 1.7-1.6h1.3c1 0 1.7.7 1.7 1.7v1.9c0 .9-.8 1.6-1.7 1.6Zm-1.2-3.9c-.2 0-.3.2-.3.4v1.9c0 .1.1.3.3.3h1.3c.2 0 .3-.2.3-.3v-2c0-.1-.1-.3-.3-.3h-1.3Z"/>
            </g>
          </svg>
          <p>1.4 л</p>
        </li>
      </ul>
      <div className="offer-info-section__price-wrapper">
        <p className="offer-info-section__price">2 300 000 ₽</p>
        <p className="offer-info-section__new-price">2 400 000 ₽</p>
      </div>
      <Link className="offer-info-section__bid-link red-button" to="">Оставить заявку</Link>
      <Link className="offer-info-section__credit-link white-button" to="">в кредит от 11 000 ₽</Link>
    </section>
  );
}

export default OfferInfo;
