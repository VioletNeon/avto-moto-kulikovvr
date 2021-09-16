import React from 'react';
import Header from '../header/header';
import OfferInfo from '../offer-info/offer-info';
import Gallery from '../gallery/gallery';
import TabSection from '../tab-section/tab-section';
import Footer from '../footer/footer';

function MainScreen() {
  return (
    <>
      <Header/>
      <main className="page-main">
        <h1 className="visually-hidden">AVTO-MOTO</h1>
        <div className="page-main__wrapper">
          <OfferInfo/>
          <Gallery/>
          <TabSection/>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default MainScreen;
