import React, {useState} from 'react';

const IMAGE_COUNT = 3;
const GalleryButtonNames = {
  BACK: 'back',
  FORWARD: 'forward',
};

function Gallery() {
  const [number, setNumber] = useState(1);

  const handleButtonBackClick = (evt) => {
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
        <img src={`img/car-${number}.jpg`} alt="Фотография Марпех 11"/>
        <span className="gallery__new-model-mark">New model</span>
      </div>
      <div className="gallery__thumbnails-wrapper">
        <button className="gallery__back-button" name={GalleryButtonNames.BACK} type="button" disabled={number === 1} onClick={handleButtonBackClick}>
          <svg width="20" height="13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 6.3 7 12M1 6.3 6.8.5M1 6.3h19" stroke="#48494D"/>
          </svg>
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
        <button className="gallery__forward-button" name={GalleryButtonNames.FORWARD} type="button" disabled={number === IMAGE_COUNT} onClick={handleButtonBackClick}>
          <svg width="20" height="13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 6.2 13 .4m6 5.8L13.3 12M19 6.2 0 6.4" stroke="#48494D"/>
          </svg>
        </button>
      </div>
    </section>
  );
}

export default Gallery;