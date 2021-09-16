import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {getDuration} from '../../utils';

const ONE_STAR_PERCENT_PART = 22;

function Review({review}) {
  const {
    nameUser,
    merit,
    flaw,
    comment,
    rating,
    date
  } = review;

  return (
    <li className="reviews-tab__item">
      <p className="reviews-tab__name">{nameUser}</p>
      <ul className="reviews-tab__quality-marks-list">
        <li className="reviews-tab__quality-mark-item">
          <span className="reviews-tab__quality-mark reviews-tab__quality-mark-item--plus">Достоинства</span>
          <p className="reviews-tab__quality-mark-description">{merit}</p>
        </li>
        <li className="reviews-tab__quality-mark-item reviews-tab__quality-mark-item--minus">
          <span className="reviews-tab__quality-mark">Недостатки</span>
          <p className="reviews-tab__quality-mark-description">{flaw}</p>
        </li>
      </ul>
      <div className="reviews-tab__comment-wrapper">
        <span className="reviews-tab__comment-title">Комментарий</span>
        <p className="reviews-tab__comment">{comment}</p>
      </div>
      <div className="reviews-tab__rating rating">
        <div className="reviews-tab__stars rating__stars">
          <span style={{width: `${rating * ONE_STAR_PERCENT_PART}%`}}>
          </span>
          <span className="visually-hidden">Rating</span>
        </div>
        <p>Советует</p>
      </div>
      <div className="reviews-tab__answer-wrapper">
        <time className="reviews-tab__time" dateTime={date}>
          {getDuration(date)}
        </time>
        <Link className="reviews-tab__answer-link" to="">Ответить</Link>
      </div>
    </li>
  );
}

Review.propTypes = {
  review: PropTypes.shape(
    {
      nameUser: PropTypes.string.isRequired,
      merit: PropTypes.string.isRequired,
      flaw: PropTypes.string.isRequired,
      comment: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
    }
  ).isRequired,
};

export default Review;