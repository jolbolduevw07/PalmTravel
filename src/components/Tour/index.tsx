import React from 'react';
import cards1 from '../../assets/cards1.png';
import cards2 from '../../assets/cards2.png';
import cards3 from '../../assets/cards3.png';
import cards4 from '../../assets/cards4.png';
import './style.scss';

const TourCards = () => {
  const mockTourCards = [
    {
      id: 1,
      title: "Тур поход",
      rating: 5,
      date: "20 сентября, 5 ночей",
      destination: "Япония",
      price: 499,
      image: cards1
    },
    {
      id: 2,
      title: "Горный треккинг",
      rating: 4,
      date: "15 октября, 7 ночей",
      destination: "Непал",
      price: 699,
      image: cards2
    },
    {
      id: 3,
      title: "Пляжный отдых",
      rating: 5,
      date: "5 ноября, 10 ночей",
      destination: "Мальдивы",
      price: 1299,
      image: cards3
    },
    {
      id: 4,
      title: "Культурный тур",
      rating: 4,
      date: "12 декабря, 6 ночей",
      destination: "Италия",
      price: 899,
      image: cards4
    }
  ];

  return (
    <section className="tour">
      <div className="container">
        <h2 className="tour__title">Популярные туры</h2>
        <div className="tour__content">
          {mockTourCards.map(tour => (
            <div key={tour.id} className="tour-card mt-[24px]">
              <div className="tour-card__image" style={{ backgroundImage: `url(${tour.image})` }}>
                <div className="tour-card__rating">
                  {Array(tour.rating).fill().map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <div className="tour-card__info">
                <h3 className="tour-card__title">{tour.title}</h3>
                <p className="tour-card__date">{tour.date}</p>
                <p className="tour-card__destination">{tour.destination}</p>
                <div className="tour-card__footer">
                  <span className="tour-card__price">${tour.price}</span>
                  <button className="tour-card__button">Подробнее</button>
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