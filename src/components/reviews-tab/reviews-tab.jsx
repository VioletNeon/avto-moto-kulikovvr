import dayjs from 'dayjs';
import React from 'react';
import PropTypes from 'prop-types';
import {getDuration} from '../../utils';
import {Link} from 'react-router-dom';

const STAR_COUNT = 3;
const ONE_STAR_PERCENT_PART = 20;

function ReviewsTab({value}) {
  const datePast = dayjs().subtract(2, 'm');

  return (
    <div className={value === 2 ? 'reviews-tab' : 'visually-hidden'} id="txt_2">
      <h3 className="visually-hidden">Отзывы</h3>
      <ul className="reviews-tab__list">
        <li className="reviews-tab__item">
          <p className="reviews-tab__name">Борис Иванов</p>
          <ul className="reviews-tab__quality-marks-list">
            <li className="reviews-tab__quality-mark-item">
              <span className="reviews-tab__quality-mark reviews-tab__quality-mark--plus">Достоинства</span>
              <p className="reviews-tab__quality-mark-description">мощность, внешний вид</p>
            </li>
            <li className="reviews-tab__quality-mark-item reviews-tab__quality-mark--minus">
              <span className="reviews-tab__quality-mark">Недостатки</span>
              <p className="reviews-tab__quality-mark-description">Слабые тормозные колодки (пришлось заменить)</p>
            </li>
          </ul>
          <div className="reviews-tab__comment-wrapper">
            <span className="reviews-tab__comment-title">Комментарий</span>
            <p className="reviews-tab__comment">
              Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.
            </p>
          </div>
          <div className="reviews-tab__rating rating">
            <div className="reviews-tab__stars rating__stars">
              <span style={{width: `${STAR_COUNT * ONE_STAR_PERCENT_PART}%`}}>
              </span>
              <span className="visually-hidden">Rating</span>
            </div>
            <p>Советует</p>
          </div>
          <div className="reviews-tab__answer-wrapper">
            <time className="reviews-tab__time" dateTime={datePast.format('YYYY-MM-DD')}>
              {getDuration(datePast)}
            </time>
            <Link className="reviews-tab__answer-link" to="">Ответить</Link>
          </div>
        </li>
        <li className="reviews-tab__item">
          <p className="reviews-tab__name">Марсель Исмагилов</p>
          <ul className="reviews-tab__quality-marks-list">
            <li className="reviews-tab__quality-mark-item">
              <span className="reviews-tab__quality-mark reviews-tab__quality-mark--plus">Достоинства</span>
              <p className="reviews-tab__quality-mark-description">Cтиль, комфорт, управляемость</p>
            </li>
            <li className="reviews-tab__quality-mark-item">
              <span className="reviews-tab__quality-mark reviews-tab__quality-mark--minus">Недостатки</span>
              <p className="reviews-tab__quality-mark-description"> Дорогой ремонт и обслуживание</p>
            </li>
          </ul>
          <div className="reviews-tab__comment-wrapper">
            <span className="reviews-tab__comment-title">Комментарий</span>
            <p className="reviews-tab__comment">
              Дизайн отличный, управление просто шикарно, ощущения за рулём такой машины особые. Но ремонт очень дорогой. Пару месяцев назад пришлось менять двигатель. По стоимости вышло как новый автомобиль. Так что, если покупать эту машину, надо быть готовым к большим расходам на обслуживание.                    </p>
          </div>
          <div className="reviews-tab__rating rating">
            <div className="reviews-tab__stars rating__stars">
              <span style={{width: `${STAR_COUNT * ONE_STAR_PERCENT_PART}%`}}>
              </span>
               <span className="visually-hidden">Rating</span>
            </div>
            <p>Советует</p>
          </div>
          <div className="reviews-tab__answer-wrapper">
            <time className="reviews-tab__time" dateTime={datePast.format('YYYY-MM-DD')}>
              {getDuration(datePast)}
            </time>
            <Link className="reviews-tab__answer-link" to="">Ответить</Link>
          </div>
        </li>
      </ul>
      <Link className="reviews-tab__leave-review-link white-button" to="">Оставить отзыв</Link>
    </div>
  );
}

ReviewsTab.propTypes = {
  value: PropTypes.number.isRequired,
};

export default ReviewsTab;