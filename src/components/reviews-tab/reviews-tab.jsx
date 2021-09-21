import dayjs from 'dayjs';
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import ModalFeedback from '../modal-feedback/modal-feedback';
import Review from '../review/review';

const defaultReviews = [
  {nameUser: 'Борис Иванов', merit: 'мощность, внешний вид', flaw: 'Слабые тормозные колодки (пришлось заменить)', comment: 'Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.', rating: 3, date: dayjs().subtract(2, 'minute').format('YYYY-MM-DDTHH:mm:ss')},
  {nameUser: 'Марсель Исмагилов', merit: 'Cтиль, комфорт, управляемость', flaw: 'Дорогой ремонт и обслуживание', comment: 'Дизайн отличный, управление просто шикарно, ощущения за рулём такой машины особые. Но ремонт очень дорогой. Пару месяцев назад пришлось менять двигатель. По стоимости вышло как новый автомобиль. Так что, если покупать эту машину, надо быть готовым к большим расходам на обслуживание.', rating: 3, date: dayjs().subtract(2, 'minute').format('YYYY-MM-DDTHH:mm:ss')},
];

function ReviewsTab({value}) {
  const [isModalOpen, setModalState] = useState(false);
  const [reviews, setLocaleStorageReviews] = useState(() => {
    const storageReviews = localStorage.getItem('reviews');
    if (!storageReviews) {
      localStorage.setItem('reviews', JSON.stringify(defaultReviews));
      return defaultReviews;
    }
    return JSON.parse(localStorage.getItem('reviews'));
  });

  const addNewReviews = (newReview) => {
    const updatedReviews = [...reviews, newReview];
    setLocaleStorageReviews(updatedReviews);
    localStorage.setItem('reviews', JSON.stringify(updatedReviews));
  };

  const onModalStateSet = () => {
    setModalState(!isModalOpen);
    document.body.style.overflow = isModalOpen ? 'visible' : 'hidden';
  };

  return (
    <>
      <div className={`reviews-tab ${value === 'tab_2' ? '' : 'visually-hidden'}`} id="txt_2">
        <h3 className="visually-hidden">Отзывы</h3>
        <Link className="reviews-tab__leave-review-link white-button" onClick={onModalStateSet} to="">Оставить отзыв</Link>
        <ul className="reviews-tab__list">
          {reviews.map((review) => <Review review={review} key={review.nameUser + review.date}/>)}
        </ul>
      </div>
      {isModalOpen && <ModalFeedback onModalStateSet={onModalStateSet} addNewReviews={addNewReviews} />}
    </>
  );
}

ReviewsTab.propTypes = {
  value: PropTypes.string.isRequired,
};

export default ReviewsTab;
