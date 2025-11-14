import React, { useState } from 'react';
import house from '../../assets/house.jpg'
import './style.scss';

const HotelsResults = () => {
    const [sortBy, setSortBy] = useState('popularity');
    const [filters, setFilters] = useState({
        resort: '',
        food: '',
        rating: '',
        hotelClass: '',
        hotelConditions: '',
        charterOnly: false,
        guaranteedPlaces: false
    });

    const hotels = [
        {
            id: 1,
            name: "De Maree 3",
            location: "Султанахмет, Стамбул",
            description: "Небольшой отель в пешей доступности от главных достопримечательностей Стамбула. Каждое утро гостям предлагается завтрак «шведский стол». Подойдет для бюджетного размещения.",
            price: 241,
            image: house,
            rating: 4.2,
            reviews: 128,
            class: 3, // 3 звезды
            classLabel: "3 звезды"
        },
        {
            id: 2,
            name: "De Maree 3",
            location: "Султанахмет, Стамбул",
            description: "Небольшой отель в пешей доступности от главных достопримечательностей Стамбула. Каждое утро гостям предлагается завтрак «шведский стол». Подойдет для бюджетного размещения.",
            price: 241,
            image: house,
            rating: 4.2,
            reviews: 128,
            class: 3,
            classLabel: "3 звезды"
        },
        {
            id: 3,
            name: "De Maree 3",
            location: "Султанахмет, Стамбул",
            description: "Небольшой отель в пешей доступности от главных достопримечательностей Стамбула. Каждое утро гостям предлагается завтрак «шведский стол». Подойдет для бюджетного размещения.",
            price: 241,
            image: house,
            rating: 4.2,
            reviews: 128,
            class: 3,
            classLabel: "3 звезды"
        }
    ];

    const handleFilterChange = (filterName, value) => {
        setFilters(prev => ({
            ...prev,
            [filterName]: value
        }));
    };

    // Функция для отображения звезд рейтинга
    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<span key={i} className="star full">★</span>);
        }

        if (hasHalfStar) {
            stars.push(<span key="half" className="star half">★</span>);
        }

        const emptyStars = 5 - stars.length;
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<span key={`empty-${i}`} className="star empty">☆</span>);
        }

        return stars;
    };

    // Функция для отображения класса отеля (звезд)
    const renderHotelClass = (hotelClass) => {
        const stars = [];
        for (let i = 0; i < hotelClass; i++) {
            stars.push(<span key={i} className="class-star">★</span>);
        }
        return stars;
    };

    return (
        <section className="hotels-results">
            <div className="container">
                {/* Заголовок и сортировка */}
                <div className="results-header">
                    <div className="results-info">
                        <h1 className="results-title">Найдено 13 вариантов</h1>
                    </div>
                    <div className="sort-section">
                        <label htmlFor="sort-select" className="sort-label">Сортировать по</label>
                        <select
                            id="sort-select"
                            className="sort-select"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                        >
                            <option value="popularity">Популярности</option>
                            <option value="price-low">Цене (сначала дешевые)</option>
                            <option value="price-high">Цене (сначала дорогие)</option>
                            <option value="rating">Рейтингу</option>
                            <option value="class">Классу отеля</option>
                            <option value="distance">Расстоянию от центра</option>
                        </select>
                    </div>
                </div>

                <div className="results-content">
                    {/* Боковая панель фильтров */}
                    <aside className="filters-sidebar">
                        <div className="filters-group">
                            <h3 className="filters-title">Фильтры</h3>

                            <div className="filter-item">
                                <label className="filter-label">Курорт/отель</label>
                                <input
                                    type="text"
                                    className="filter-input"
                                    placeholder="Название отеля или курорта"
                                    value={filters.resort}
                                    onChange={(e) => handleFilterChange('resort', e.target.value)}
                                />
                            </div>

                            {/* Новый фильтр - Класс отеля */}
                            <div className="filter-item">
                                <label className="filter-label">Класс отеля</label>
                                <select
                                    className="filter-select"
                                    value={filters.hotelClass}
                                    onChange={(e) => handleFilterChange('hotelClass', e.target.value)}
                                >
                                    <option value="">Любой класс</option>
                                    <option value="5">5 звезд</option>
                                    <option value="4">4 звезды</option>
                                    <option value="3">3 звезды</option>
                                    <option value="2">2 звезды</option>
                                    <option value="1">1 звезда</option>
                                    <option value="0">Без звезд</option>
                                </select>
                            </div>

                            <div className="filter-item">
                                <label className="filter-label">Питание</label>
                                <select
                                    className="filter-select"
                                    value={filters.food}
                                    onChange={(e) => handleFilterChange('food', e.target.value)}
                                >
                                    <option value="">Любое</option>
                                    <option value="breakfast">Только завтрак</option>
                                    <option value="all-inclusive">Все включено</option>
                                    <option value="half-board">Полупансион</option>
                                    <option value="full-board">Полный пансион</option>
                                </select>
                            </div>

                            <div className="filter-item">
                                <label className="filter-label">Рейтинг отеля</label>
                                <select
                                    className="filter-select"
                                    value={filters.rating}
                                    onChange={(e) => handleFilterChange('rating', e.target.value)}
                                >
                                    <option value="">Любой</option>
                                    <option value="9">9+ Отлично</option>
                                    <option value="8">8+ Очень хорошо</option>
                                    <option value="7">7+ Хорошо</option>
                                    <option value="6">6+ Удовлетворительно</option>
                                </select>
                            </div>

                            <div className="filter-item">
                                <label className="filter-label">Условия отеля</label>
                                <select
                                    className="filter-select"
                                    value={filters.hotelConditions}
                                    onChange={(e) => handleFilterChange('hotelConditions', e.target.value)}
                                >
                                    <option value="">Любые</option>
                                    <option value="pool">С бассейном</option>
                                    <option value="spa">С SPA</option>
                                    <option value="wifi">С бесплатным Wi-Fi</option>
                                    <option value="parking">С парковкой</option>
                                    <option value="breakfast-included">С завтраком</option>
                                </select>
                            </div>

                            <div className="filter-checkboxes">
                                <label className="checkbox-label">
                                    <input
                                        type="checkbox"
                                        checked={filters.charterOnly}
                                        onChange={(e) => handleFilterChange('charterOnly', e.target.checked)}
                                    />
                                    <span className="checkmark"></span>
                                    Только чартер
                                </label>

                                <label className="checkbox-label">
                                    <input
                                        type="checkbox"
                                        checked={filters.guaranteedPlaces}
                                        onChange={(e) => handleFilterChange('guaranteedPlaces', e.target.checked)}
                                    />
                                    <span className="checkmark"></span>
                                    Гарантия мест в отеле
                                </label>
                            </div>
                        </div>
                    </aside>

                    {/* Список отелей */}
                    <main className="hotels-list">
                        {hotels.map(hotel => (
                            <div key={hotel.id} className="hotel-card">
                                <div className="hotel-image">
                                    <img src={hotel.image} alt={hotel.name} />
                                    <div className="hotel-rating">
                                        <div className="rating-stars">
                                            {renderStars(hotel.rating)}
                                        </div>
                                        <span className="rating-text">{hotel.rating} ({hotel.reviews} отзывов)</span>
                                    </div>
                                </div>

                                <div className="hotel-info">
                                    <div className="hotel-header">
                                        <div className="hotel-name-section">
                                            <h2 className="hotel-name">{hotel.name}</h2>
                                            <div className="hotel-class">
                                                {renderHotelClass(hotel.class)}
                                                <span className="class-label">({hotel.classLabel})</span>
                                            </div>
                                        </div>
                                        <div className="hotel-location">
                                            <span className="location-icon">📍</span>
                                            {hotel.location}
                                        </div>
                                    </div>

                                    <p className="hotel-description">{hotel.description}</p>

                                    <div className="hotel-features">
                                        <span className="feature">✓ Бесплатный Wi-Fi</span>
                                        <span className="feature">✓ Завтрак включен</span>
                                        <span className="feature">✓ 24-часовая стойка</span>
                                        <span className="feature">✓ Кондиционер</span>
                                    </div>
                                </div>

                                <div className="hotel-pricing">
                                    <div className="price-section">
                                        <div className="price-label">Цена за тур</div>
                                        <div className="price-amount">${hotel.price}</div>
                                        <div className="price-note">за 7 ночей на 2 человек</div>
                                    </div>
                                    <button className="select-button">
                                        Выбрать
                                    </button>
                                </div>
                            </div>
                        ))}
                    </main>
                </div>
            </div>
        </section>
    );
};

export default HotelsResults;