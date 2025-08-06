import "./style.scss"
function Hero() {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero__content flex flex-col pt-[111px] ">
                    <h1 className="hero__title mb-[12px]">Жить по-настоящему значит путешевстовать</h1>
                    <p className="hero__description mb-[32px]">Находи и бронируй лучшие туры, отели и авиабилеты</p>
                    <div className="hero__btns">
                        <button className="hero__btn rounded-[12px] w-[233px] h-[51px] bg-[#f78c1f]">Подобрать тур</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero