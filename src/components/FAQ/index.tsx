import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './style.scss';

function CombinedComponent() {
  const [isMobile, setIsMobile] = useState(false);

  const faqItems = [
    {
      question: "How do I book a flight or hotel on Flywere?",
      answer: "Visit our site, enter travel details, choose options, and proceed to checkout for a seamless booking experience."
    },
    {
      question: "How can I cancel my booking?",
      answer: "You can cancel through your account or by contacting support."
    },
    {
      question: "Is there a mobile app available?",
      answer: "Yes, our app is available on both iOS and Android."
    },
    {
      question: "Is there a loyalty program?",
      answer: "Yes, join our loyalty program to earn points and rewards."
    },
    {
      question: "Can I change my booking?",
      answer: "Yes, modifications are possible depending on airline or hotel policies."
    },
    {
      question: "What payment methods are supported?",
      answer: "We support cards, PayPal, and more."
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // запустим при первом рендере
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="combined-container">
      <div className="faq-section">
        <h1 className="section-title">Часто задаваемые вопросы</h1>

        {isMobile ? (
          <>
            {/* Свайпер для мобилок */}
            <Swiper
              modules={[Pagination]}
              spaceBetween={16}
              slidesPerView={1.1}
              centeredSlides={true}
              pagination={{
                clickable: true,
                el: ".faq-pagination",
                type: "bullets",
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
            <div className="faq-pagination"></div>
          </>
        ) : (
          /* Сетка на десктопе */
          <div className="faq-grid">
            {faqItems.map((item, index) => (
              <div className="faq-card" key={index}>
                <h3 className="faq-question">{item.question}</h3>
                <p className="faq-answer">{item.answer}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CombinedComponent;
