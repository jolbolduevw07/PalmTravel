import logo from '../../assets/Footer/logo.svg';
import './style.scss';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__top">
                        <div className="footer__logo">
                            <img src={logo} alt="Palm Travel Logo" />
                        </div>
                        <div className="footer__address">
                            <p>Flight Expert Indonesia (Jakarta)</p>
                            <p>Jl. Raya Bandara Soekarno-Hatta, Tangerang, Banten, Indonesia.</p>
                        </div>
                        <ul className="footer__nav">
                            <li><a href="#">О нас</a></li>
                            <li><a href="#">Контакты</a></li>
                            <li><a href="#">Популярные туры</a></li>
                        </ul>
                    </div>
                    <div className="footer__bottom">
                        <p>©2023 Palm Travel. All rights reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
