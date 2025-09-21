import logo from '../../assets/Footer/logo.svg';
import './style.scss';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__top">

                        <img src={logo} alt="Palm Travel Logo" />

                        <div className="footer__address">
                            <p>Flight Expert Indonesia (Jakarta)</p>
                            <p>Jl. Raya Bandara Soekarno-Hatta, Tangerang, Banten, Indonesia.</p>
                        </div>
                    </div>
                    <div className="footer__navs">
                        <ul className="footer__nav">
                            <ol><a href="#">О нас</a></ol>
                            <ol><a href="#">Контакты</a></ol>
                            <ol><a href="#">Популярные туры</a></ol>
                        </ul>
                    </div>



                </div>
                <div className="footer__bottom">
                    <p>©2023 Palm Travel. All rights reserved</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
