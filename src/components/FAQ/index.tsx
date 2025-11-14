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
      question: "Какие туры вы предлагаете?",
      answer: "Мы предлагаем разнообразные туры: экскурсионные, пляжные, горнолыжные, круизы, а также индивидуальные туры под ваши пожелания."
    },
    {
      question: "Какова стоимость туров и что в нее входит?",
      answer: "Стоимость зависит от направления и типа тура. Обычно она включает проживание, питание, трансфер и экскурсионное обслуживание. Дополнительно оплачиваются авиабилеты, страховка и личные расходы."
    },
    {
      question: "Какие документы нужны для поездки за границу?",
      answer: "Для международных поездок обычно требуется заграничный паспорт, виза (если необходимо) и страховой полис. Для некоторых стран могут понадобиться прививки или справки о здоровье."
    },
    {
      question: "Как забронировать тур и можно ли его изменить?",
      answer: "Бронирование возможно онлайн, по телефону или в офисе. Изменения возможны в зависимости от условий туроператора, рекомендуем уточнять заранее."
    },
    {
      question: "Есть ли страховка и что она покрывает?",
      answer: "Да, мы предлагаем туристическую страховку, которая покрывает медицинские расходы, потерю багажа и отмену поездки. Подробности можно уточнить при оформлении тура."
    },
    {
      question: "Какие меры безопасности вы принимаете в связи с COVID-19 и другими рисками?",
      answer: "Мы следуем международным стандартам безопасности, включая проверку состояния здоровья перед поездкой, сотрудничество с проверенными партнерами и информирование клиентов о правилах страны назначения."
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="combined-container">
      <div className="container">
        <div className="faq-section">
          <h1 className="section-title">Часто задаваемые вопросы</h1>

          {isMobile ? (
            <>
              {/* Swiper с карточками по центру */}
              <Swiper
                modules={[Pagination]}
                spaceBetween={16}
                slidesPerView={1}
                pagination={{
                  clickable: true,
                  el: ".faq-pagination",
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
            /* Сетка на десктопе с центрированием */
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
    </div>
  );
}

export default CombinedComponent;