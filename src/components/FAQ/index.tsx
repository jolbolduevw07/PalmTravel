import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './style.scss';

function CombinedComponent() {
    const faqItems = [
        {
            question: "What payment methods do you accept?",
            answer: "We accept credit cards, PayPal, and bank transfers."
        },
        {
            question: "How can I cancel my booking?",
            answer: "You can cancel through your account or by contacting support."
        },
        {
            question: "Is there a mobile app available?",
            answer: "Yes, our app is available on both iOS and Android."
        }
    ];

    return (
        <div className="combined-container">
            {/* Секция FAQ */}
            <div className="faq-section">
                <h1 className="section-title">Часто задаваемые вопросы</h1>

                <Swiper
                    modules={[Pagination]}
                    spaceBetween={16}
                    slidesPerView={1.1}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                        el: '.faq-pagination',
                        type: 'bullets',
                    }}
                    className="faq-swiper"
                >
                    {faqItems.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="faq-card">
                                <h3 className="faq-question">{item.question}</h3>
                                <p className="faq-answer">{item.answer}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* Кастомный контейнер для пагинации */}
                <div className="faq-pagination"></div>
            </div>
        </div>
    );
}

export default CombinedComponent;