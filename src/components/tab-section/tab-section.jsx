import React, {useState} from 'react';
import ParametersTab from '../parameters-tab/parameters-tab';
import ReviewsTab from '../reviews-tab/reviews-tab';
import ContactsTab from '../contacts-tab/contacts-tab';

function TabSection() {
  const [value, setValue] = useState('1');

  const onTabChange = (evt) => {
    setValue(evt.target.value);
  };

  return (
    <section className="tab-section">
      <h2 className="visually-hidden">Подробнее о Марпех 11</h2>
      <div className="options-tabs">
        <div className="options-tabs__tabs-wrapper">
          <input className="visually-hidden" checked={value === '1'} onChange={onTabChange} type="radio" value="1" name="inset" id="tab_1"/>
          <label className="options-tabs__tab" htmlFor="tab_1" tabIndex="0">
            <span>Характеристики</span>
          </label>
          <input className="visually-hidden" checked={value === '2'} onChange={onTabChange} type="radio" name="inset" value="2" id="tab_2"/>
          <label className="options-tabs__tab" htmlFor="tab_2" tabIndex="0">
            <span>Отзывы</span>
          </label>
          <input className="visually-hidden" checked={value === '3'} onChange={onTabChange} type="radio" name="inset" value="3" id="tab_3"/>
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
