import React, {useEffect, useRef, useState} from 'react';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import {trapFocus} from '../../utils';

const MODAL_FEEDBACK_CLASS_NAME = 'modal-feedback';
const KEY_ESCAPE_CODE = 27;
const KEY_ENTER_CODE = 13;
const FEEDBACK_INPUT_TYPE = 'radio';

function ModalFeedback({onModalStateSet, addNewReviews}) {
  const nameUser = useRef(null);
  const merit = useRef(null);
  const flaw = useRef(null);
  const comment = useRef(null);
  const modal = useRef(null);
  const [rating, setRating] = useState('0');

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    const newUserReview = {
      nameUser: nameUser.current.value,
      merit: merit.current.value,
      flaw: flaw.current.value,
      comment: comment.current.value,
      rating: +rating,
      date: dayjs().format('YYYY-MM-DDTHH:mm:ss'),
    };
    addNewReviews(newUserReview);
    onModalStateSet();
  };

  const onRatingChange = (evt) => {
    setRating(evt.target.value);
  };

  const onEscKeyDown = (evt) => {
    if (evt.keyCode === KEY_ESCAPE_CODE) {
      evt.preventDefault();
      onModalStateSet();
    }
  };

  const onOverlayModalClick = (evt) => {
    if (evt.target.className === MODAL_FEEDBACK_CLASS_NAME) {
      onModalStateSet();
    }
  };

  const onTabEnterKeyDown = (evt) => {
    if (evt.keyCode === KEY_ENTER_CODE && evt.target.type === FEEDBACK_INPUT_TYPE) {
      evt.preventDefault();
      setRating(evt.target.value);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onTabEnterKeyDown);
    return () => document.removeEventListener('keydown', onTabEnterKeyDown);
  });

  useEffect(() => {
    trapFocus(modal.current);
    document.addEventListener('keydown', onEscKeyDown);
    return () => document.removeEventListener('keydown', onEscKeyDown);
  });

  return (
    <div className="modal-feedback" onClick={onOverlayModalClick} ref={modal}>
      <div className="modal-feedback__wrapper">
        <h2 className="modal-feedback__tittle">Оставить отзыв</h2>
        <form className="modal-feedback__form" method="post" onSubmit={onFormSubmit} action='https://echo.htmlacademy.ru/'>
          <ul className="modal-feedback__list">
            <li className="modal-feedback__item">
              <label className="modal-feedback__description" htmlFor="name-enter">
                <input id="name-enter" ref={nameUser} type="text" name="name" placeholder="Имя" required autoFocus/>
              </label>
            </li>
            <li className="modal-feedback__item">
              <label className="modal-feedback__description" htmlFor="merit-enter">
                <input id="merit-enter" ref={merit} type="text" name="merit" placeholder="Достоинства"/>
              </label>
            </li>
            <li className="modal-feedback__item">
              <label className="modal-feedback__description" htmlFor="flaw-enter">
                <input id="flaw-enter" ref={flaw} type="text" name="flaw" placeholder="Недостатки"/>
              </label>
            </li>
          </ul>
          <div className="modal-feedback__comment-wrapper">
            <label className="visually-hidden" htmlFor="comment-field">Комментарий</label>
            <textarea rows="4" cols="70" ref={comment} required name="comment-field" id="message-field" placeholder="Комментарий">
            </textarea>
          </div>
          <div className="form-rating">
            <p>Оцените товар:</p>
            <div className="form-rating__wrapper">
              <input className="form-rating__input visually-hidden" checked={rating === '5'} name="rating-5" value="5" id="5-stars" type="radio" onChange={onRatingChange}/>
              <label htmlFor="5-stars" className="form-rating__label" title="perfect">
                <svg className="form-rating__star-image" viewBox="0 0 17 16" width="27" height="27">
                  <path d="M8.74375 0L10.6227 5.87336L16.7029 5.87336L11.7839 9.50329L13.6628 15.3766L8.74375 11.7467L3.82472 15.3766L5.70362 9.50329L0.784596 5.87336L6.86485 5.87336L8.74375 0Z" fill="#BDBEC2" fillOpacity="0.7"/>
                </svg>
              </label>
              <input className="form-rating__input visually-hidden" name="rating-4" checked={rating === '4'} value="4" id="4-stars" type="radio" onChange={onRatingChange}/>
              <label htmlFor="4-stars" className="form-rating__label" title="good">
                <svg className="form-rating__star-image" viewBox="0 0 17 16" width="27" height="27">
                  <path d="M8.74375 0L10.6227 5.87336L16.7029 5.87336L11.7839 9.50329L13.6628 15.3766L8.74375 11.7467L3.82472 15.3766L5.70362 9.50329L0.784596 5.87336L6.86485 5.87336L8.74375 0Z" fill="#BDBEC2" fillOpacity="0.7"/>
                </svg>
              </label>
              <input className="form-rating__input visually-hidden" name="rating-3" checked={rating === '3'} value="3" id="3-stars" type="radio" onChange={onRatingChange}/>
              <label htmlFor="3-stars" className="form-rating__label" title="not bad">
                <svg className="form-rating__star-image" viewBox="0 0 17 16" width="27" height="27">
                  <path d="M8.74375 0L10.6227 5.87336L16.7029 5.87336L11.7839 9.50329L13.6628 15.3766L8.74375 11.7467L3.82472 15.3766L5.70362 9.50329L0.784596 5.87336L6.86485 5.87336L8.74375 0Z" fill="#BDBEC2" fillOpacity="0.7"/>
                </svg>
              </label>
              <input className="form-rating__input visually-hidden" name="rating-2" checked={rating === '2'} value="2" id="2-stars" type="radio" onChange={onRatingChange}/>
              <label htmlFor="2-stars" className="form-rating__label" title="badly">
                <svg className="form-rating__star-image" viewBox="0 0 17 16" width="27" height="27">
                  <path d="M8.74375 0L10.6227 5.87336L16.7029 5.87336L11.7839 9.50329L13.6628 15.3766L8.74375 11.7467L3.82472 15.3766L5.70362 9.50329L0.784596 5.87336L6.86485 5.87336L8.74375 0Z" fill="#BDBEC2" fillOpacity="0.7"/>
                </svg>
              </label>
              <input className="form-rating__input visually-hidden" name="rating-1" checked={rating === '1'} value="1" id="1-star" type="radio" onChange={onRatingChange}/>
              <label htmlFor="1-star" className="form-rating__label" title="terribly">
                <svg className="form-rating__star-image" viewBox="0 0 17 16" width="27" height="27">
                  <path d="M8.74375 0L10.6227 5.87336L16.7029 5.87336L11.7839 9.50329L13.6628 15.3766L8.74375 11.7467L3.82472 15.3766L5.70362 9.50329L0.784596 5.87336L6.86485 5.87336L8.74375 0Z" fill="#BDBEC2" fillOpacity="0.7"/>
                </svg>
              </label>
            </div>
          </div>
          <div className="modal-feedback__button-message-wrapper">
            <button className="modal-feedback__button-send-comment red-button" type="submit">Оставить отзыв</button>
          </div>
        </form>
        <button className="modal-feedback__modal-close-button" type="button" aria-label="Закрыть" onClick={onModalStateSet} tabIndex="0">
        </button>
      </div>
    </div>
  );
}

ModalFeedback.propTypes = {
  onModalStateSet: PropTypes.func.isRequired,
  addNewReviews: PropTypes.func.isRequired,
};

export default ModalFeedback;
