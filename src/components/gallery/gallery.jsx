import React, {useState} from 'react';

const IMAGE_COUNT = 3;
const GalleryButtonNames = {
  BACK: 'back',
  FORWARD: 'forward',
};

function Gallery() {
  const [number, setNumber] = useState(1);

  const onButtonArrowClick = (evt) => {
    if (evt.target.name === GalleryButtonNames.BACK) {
      setNumber(number - 1);
    } else if (evt.target.name === GalleryButtonNames.FORWARD) {
      setNumber(number + 1);
    }
  };

  return (
    <section className="gallery">
      <h2 className="visually-hidden">Фотографии Марпех 11</h2>
      <div className="gallery__frame-wrapper">
        <img src={`img/car-${number}.jpg`} alt="Фотография Марпех 11" width="600" height="375"/>
        <span className="gallery__new-model-mark">New model</span>
      </div>
      <div className="gallery__thumbnails-wrapper">
        <button className="gallery__back-button" name={GalleryButtonNames.BACK} aria-label="Вернутся к предыдущей фотографии" type="button" disabled={number === 1} onClick={onButtonArrowClick}>
        </button>
        <ul className="gallery__image-thumbnails-list">
          <li className="gallery__image-thumbnails-item">
            <img src={'img/car-1.jpg'} width="128" height="80" alt="Фотография Марпех 11"/>
          </li>
          <li className="gallery__image-thumbnails-item">
            <img src={'img/car-2.jpg'} width="128" height="80" alt="Фотография Марпех 11"/>
          </li>
          <li className="gallery__image-thumbnails-item">
            <img src={'img/car-3.jpg'} width="128" height="80" alt="Фотография Марпех 11"/>
          </li>
        </ul>
        <button className="gallery__forward-button" name={GalleryButtonNames.FORWARD} aria-label="Перейти к следующей фотографии" type="button" disabled={number === IMAGE_COUNT} onClick={onButtonArrowClick}>
        </button>
      </div>
    </section>
  );
}

export default Gallery;
