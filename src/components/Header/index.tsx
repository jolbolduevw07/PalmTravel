import React, { useState } from "react";
import logo from '../../assets/logo.jpg'
import './style.scss'
function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <section className="header">
            <div className="container">
                <div className="header__content flex justify-between items-center">
                    <img src={logo} alt="logo" className="w-[90px]" />
                    <div className="header__btns">
                        <button className="header__btn w-[166px] h-[51px] bg-[#2C2C2C] rounded-[16px] " >Свяжитесь с нами</button>
                    </div>
                    <div className="burger-wrapper">
            <div className={`burger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <nav className={`menu ${isOpen ? 'active' : ''}`}>
                <ul>
                    <li className="menu__link"><a href="#">Популярные туры</a></li>
                    <li className="menu__link"><a href="#">О нас</a></li>
                    <li className="menu__link"><a href="#">Контакты</a></li>
                </ul>
            </nav>
        </div>
                </div>
            </div>
        </section>
    )
}
export default Header