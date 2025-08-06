import './style.scss'
import earth from '../../assets/earth.svg'
import home from '../../assets/home.svg'
import plane from '../../assets/plane.svg'

function Search() {
    return (
        <section className="search">
            <div className="container">
                <h2 className="search__title">Найти тур</h2>
                <div className="search-content">
                    <div className="search-content-hotel__btns">
                        <button className="search-content-hotel__btn rounded-[12px] w-[108px] h-[32px]"><img src={earth} alt="earth"/>Тур</button>
                        <button className="search-content-hotel__btn rounded-[12px] w-[108px] h-[32px]"><img src={home} alt="home" /> Отели</button>
                        <button className="search-content-hotel__btn rounded-[12px] w-[108px] h-[32px]"><img src={plane} alt="plane"/>Авиабилеты</button>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}
export default Search