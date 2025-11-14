import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import cards1 from '../../assets/cards1.png';
import cards2 from '../../assets/cards2.png';
import cards3 from '../../assets/cards3.png';
import cards4 from '../../assets/cards4.png';
import './style.scss';

const TourCards = () => {
  const mockTourCards = [
    { id: 1, title: "Тур поход", rating: 5, date: "20 сентября, 5 ночей", destination: "Япония", price: 499, image: cards1 },
    { id: 2, title: "Горный треккинг", rating: 4, date: "15 октября, 7 ночей", destination: "Непал", price: 699, image: cards2 },
    { id: 3, title: "Пляжный отдых", rating: 5, date: "5 ноября, 10 ночей", destination: "Мальдивы", price: 1299, image: cards3 },
    { id: 4, title: "Культурный тур", rating: 4, date: "12 декабря, 6 ночей", destination: "Италия", price: 899, image: cards4 },
    { id: 5, title: "Пляжный отдых", rating: 5, date: "5 ноября, 10 ночей", destination: "Мальдивы", price: 1299, image: cards3 },
    { id: 6, title: "Культурный тур", rating: 4, date: "12 декабря, 6 ночей", destination: "Италия", price: 899, image: cards4 },
  ];

  return (
    <section id='tours' className="tour py-6 md:py-10">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="tour__title text-xl sm:text-2xl font-bold mb-4 sm:mb-6 px-2 sm:px-0">Популярные туры</h2>

        {/* Мобильная версия - колонка */}
        <div className="block md:hidden space-y-4">
          {mockTourCards.map(tour => (
            <div
              key={tour.id}
              className="tour-card bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <div
                className="tour-card__image h-40 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${tour.image})` }}
              >
                <div className="tour-card__rating absolute top-2 right-2 bg-white/70 px-2 py-1 rounded text-sm">
                  {[...Array(tour.rating)].map((_, i) => <span key={i}>★</span>)}
                </div>
              </div>
              <div className="tour-card__info p-4">
                <h3 className="tour-card__title font-semibold text-lg mb-1">{tour.title}</h3>
                <p className="tour-card__date text-gray-500 text-base mb-1">{tour.date}</p>
                <p className="tour-card__destination text-gray-700 text-base">{tour.destination}</p>
                <div className="tour-card__footer mt-4 flex justify-between items-center">
                  <span className="tour-card__price font-bold text-lg">${tour.price}</span>
                  <button className="tour-card__button bg-orange-500 text-white px-4 py-2 rounded text-base hover:bg-orange-600 transition">
                    Подробнее
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Десктоп версия - Swiper */}
        <div className="hidden md:block">
          <Swiper
  modules={[Navigation]}   // Pagination удалён
  spaceBetween={24}
  slidesPerView={4}
  navigation
  pagination={false}        // ← полностью отключает точки
  breakpoints={{
    320: {
      slidesPerView: 1,
      spaceBetween: 16
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 24
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 24
    }
  }}
>
  {mockTourCards.map(tour => (
    <SwiperSlide key={tour.id}>
      <div className="tour-card bg-white rounded-xl overflow-hidden shadow-lg h-full">
        <div
          className="tour-card__image h-48 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${tour.image})` }}
        >
          <div className="tour-card__rating absolute top-2 right-2 bg-white/70 px-2 py-1 rounded text-sm">
            {[...Array(tour.rating)].map((_, i) => <span key={i}>★</span>)}
          </div>
        </div>
        <div className="tour-card__info p-4">
          <h3 className="tour-card__title font-semibold text-lg mb-1">{tour.title}</h3>
          <p className="tour-card__date text-gray-500 text-base mb-1">{tour.date}</p>
          <p className="tour-card__destination text-gray-700 text-base">{tour.destination}</p>
          <div className="tour-card__footer mt-4 flex justify-between items-center">
            <span className="tour-card__price font-bold text-lg">${tour.price}</span>
            <button className="tour-card__button bg-orange-500 text-white px-4 py-2 rounded text-base hover:bg-orange-600 transition">
              Подробнее
            </button>
          </div>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

        </div>
      </div>
    </section>
  );
};

export default TourCards;