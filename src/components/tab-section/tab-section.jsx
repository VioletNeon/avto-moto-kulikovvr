import React, {useEffect, useState} from 'react';
import ParametersTab from '../parameters-tab/parameters-tab';
import ReviewsTab from '../reviews-tab/reviews-tab';
import ContactsTab from '../contacts-tab/contacts-tab';

const KEY_ENTER_CODE = 13;
const TAB_LABEL_CLASS_NAME = 'options-tabs__tab';

function TabSection() {
  const [value, setValue] = useState('tab_1');

  const onTabChange = (evt) => {
    setValue(evt.target.value);
  };

  const onTabEnterKeyDown = (evt) => {
    if (evt.keyCode === KEY_ENTER_CODE && evt.target.className === TAB_LABEL_CLASS_NAME) {
      evt.preventDefault();
      setValue(evt.target.htmlFor);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onTabEnterKeyDown);
    return () => document.removeEventListener('keydown', onTabEnterKeyDown);
  });

  return (
    <section className="tab-section">
      <h2 className="visually-hidden">Подробнее о Марпех 11</h2>
      <div className="options-tabs">
        <div className="options-tabs__tabs-wrapper">
          <input className="visually-hidden" checked={value === 'tab_1'} onChange={onTabChange} type="radio" name="inset" value="tab_1" id="tab_1"/>
          <label className="options-tabs__tab" htmlFor="tab_1" tabIndex="0">
            <span>Характеристики</span>
          </label>
          <input className="visually-hidden" checked={value === 'tab_2'} onChange={onTabChange} type="radio" name="inset" value="tab_2" id="tab_2"/>
          <label className="options-tabs__tab" htmlFor="tab_2" tabIndex="0">
            <span>Отзывы</span>
          </label>
          <input className="visually-hidden" checked={value === 'tab_3'} onChange={onTabChange} type="radio" name="inset" value="tab_3" id="tab_3"/>
          <label className="options-tabs__tab" htmlFor="tab_3" tabIndex="0">
            <span>Контакты</span>
          </label>
        </div>
        <ParametersTab value={value}/>
        <ReviewsTab value={value}/>
        <ContactsTab value={value}/>
      </div>
    </section>
  );
}

export default TabSection;
