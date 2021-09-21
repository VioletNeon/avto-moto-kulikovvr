import React from 'react';
import PropTypes from 'prop-types';

function ParametersTab({value}) {
  return (
    <div className={`parameters-tab ${value === 'tab_1' ? '' : 'visually-hidden'}`} id="txt_1">
      <h3 className="visually-hidden">Характеристики</h3>
      <ul className="parameters-tab__list">
        <li className="parameters-tab__item">
          <span>Трансмиссия</span>
          <span>Робототизированная</span>
        </li>
        <li className="parameters-tab__item">
          <span>Мощность двигателя, л.с.</span>
          <span>249</span>
        </li>
        <li className="parameters-tab__item">
          <span>Тип двигателя</span>
          <span>Бензиновый</span>
        </li>
        <li className="parameters-tab__item">
          <span>Привод</span>
          <span>Полный</span>
        </li>
        <li className="parameters-tab__item">
          <span>Объем двигателя, л</span>
          <span>2.4</span>
        </li>
        <li className="parameters-tab__item">
          <span>Макс. крутящий момент</span>
          <span>370/4500</span>
        </li>
        <li className="parameters-tab__item">
          <span>Количество цилиндров</span>
          <span>4</span>
        </li>
      </ul>
    </div>
  );
}

ParametersTab.propTypes = {
  value: PropTypes.string.isRequired,
};

export default ParametersTab;
