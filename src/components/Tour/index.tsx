import React from 'react';
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
  ];

  return (
    <section className="tour py-10">
      <div className="container mx-auto">
        <h2 className="tour__title text-2xl font-bold mb-6">Популярные туры</h2>
        <div className="tour__scroll flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
          {mockTourCards.map(tour => (
            <div
              key={tour.id}
              className="tour-card min-w-[280px] md:min-w-[320px] lg:min-w-[360px] bg-white rounded-xl overflow-hidden shadow-lg snap-start flex-shrink-0"
            >
              <div
                className="tour-card__image h-48 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${tour.image})` }}
              >
                <div className="tour-card__rating absolute top-2 right-2 bg-white/70 px-2 py-1 rounded">
                  {[...Array(tour.rating)].map((_, i) => <span key={i}>★</span>)}
                </div>
              </div>
              <div className="tour-card__info p-4">
                <h3 className="tour-card__title font-semibold text-lg">{tour.title}</h3>
                <p className="tour-card__date text-gray-500">{tour.date}</p>
                <p className="tour-card__destination text-gray-700">{tour.destination}</p>
                <div className="tour-card__footer mt-4 flex justify-between items-center">
                  <span className="tour-card__price font-bold">${tour.price}</span>
                  <button className="tour-card__button bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
                    Подробнее
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourCards;