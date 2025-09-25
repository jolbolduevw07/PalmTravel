import "./style.scss"

function Hero() {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero__content flex flex-col pt-[80px] md:pt-[150px] lg:pt-[200px] max-w-[1200px] mx-auto">
                    <h1 className="hero__title mb-3 text-[28px] md:text-[40px] lg:text-[52px] leading-tight max-w-[360px] md:max-w-[600px] lg:max-w-[800px]">
                        Жить по-настоящему значит путешествовать
                    </h1>
                    <p className="hero__description mb-8 text-[14px] md:text-[18px] lg:text-[20px] max-w-[260px] md:max-w-[500px] lg:max-w-[600px]">
                        Находи и бронируй лучшие туры, отели и авиабилеты
                    </p>
                    <div className="hero__btns">
                        <button className="hero__btn rounded-[12px] w-[180px] md:w-[233px] h-[48px] md:h-[51px] bg-[#f78c1f] transition hover:bg-[#e67d10]">
                            Подобрать тур
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero