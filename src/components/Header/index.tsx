import React, { useState } from "react";
import logo from "../../assets/logo.png";
import "./style.scss";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    // ✅ Функция плавного скролла
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false); // закрываем мобильное меню
        }
    };

    return (
        <header className="w-full fixed top-0 left-0 z-50 bg-white/20 backdrop-blur-md transition-all duration-300">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-4 header__content">
                <img
                    src={logo}
                    alt="logo"
                    className="w-24 md:w-32 header__logo cursor-pointer"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                />


                {/* Навигация для десктопа */}
                <nav className="hidden md:flex gap-8 text-gray-800 font-medium">
                    <button onClick={() => handleScroll("search")} className="hover:text-orange-400 transition">
                        Популярные туры
                    </button>
                    <button onClick={() => handleScroll("about")} className="hover:text-orange-400 transition">
                        О нас
                    </button>
                    <button onClick={() => handleScroll("contacts")} className="hover:text-orange-400 transition">
                        Контакты
                    </button>
                </nav>

                {/* Бургер-меню */}
                <div className="md:hidden flex flex-col items-center justify-center w-8 h-8 cursor-pointer" onClick={toggleMenu}>
                    <div className={`w-6 h-0.5 bg-gray-800 mb-1 transition-all duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}></div>
                    <div className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></div>
                </div>
            </div>

            {/* Мобильное меню */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-white/90 backdrop-blur-md shadow-lg rounded-b-2xl md:hidden z-40">
                    <div className="flex flex-col items-center py-4 space-y-2">
                        <a
                            onClick={() => handleScroll("tours")}
                            className="py-4 px-4 text-lg font-semibold text-gray-800 hover:bg-orange-50 hover:text-orange-500 rounded-lg transition-all duration-200"
                        >
                            Популярные туры
                        </a>
                        <a
                            onClick={() => handleScroll("about")}
                            className="py-4 px-4 text-lg font-semibold text-gray-800 hover:bg-orange-50 hover:text-orange-500 rounded-lg transition-all duration-200"
                        >
                            О нас
                        </a>
                        <a
                            onClick={() => handleScroll("contacts")}
                            className="py-4 px-4 text-lg font-semibold text-gray-800 hover:bg-orange-50 hover:text-orange-500 rounded-lg transition-all duration-200"
                        >
                            Контакты
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;
