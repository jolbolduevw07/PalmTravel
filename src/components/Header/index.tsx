import React, { useState } from "react";
import logo from "../../assets/logo.jpg";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="w-full fixed top-0 left-0 z-50 bg-white/20 backdrop-blur-md">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <img src={logo} alt="logo" className="w-[90px]" />

                    <nav className="hidden md:flex gap-8 text-white font-medium">
                        <a href="#" className="hover:text-orange-400 transition">
                            Популярные туры
                        </a>
                        <a href="#" className="hover:text-orange-400 transition">
                            О нас
                        </a>
                        <a href="#" className="hover:text-orange-400 transition">
                            Контакты
                        </a>
                    </nav>

                    <div className="hidden md:block">
                        <button className="w-[166px] h-[51px] bg-[#2C2C2C] text-white rounded-[16px] hover:bg-black transition">
                            Свяжитесь с нами
                        </button>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="flex flex-col gap-1.5 w-8 h-8 justify-center items-center relative z-50"
                        >
                            <span
                                className={`h-0.5 w-6 bg-white transition-transform ${isOpen ? "rotate-45 translate-y-1.5" : ""
                                    }`}
                            ></span>
                            <span
                                className={`h-0.5 w-6 bg-white transition-opacity ${isOpen ? "opacity-0" : ""
                                    }`}
                            ></span>
                            <span
                                className={`h-0.5 w-6 bg-white transition-transform ${isOpen ? "-rotate-45 -translate-y-1.5" : ""
                                    }`}
                            ></span>
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={`fixed inset-0 bg-black/40 transition-opacity duration-500 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={toggleMenu}
            ></div>

            <div
                className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white shadow-lg transform transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <nav className="flex flex-col gap-6 px-6 py-16 text-gray-800 font-medium text-lg">
                    <a href="#" className="hover:text-orange-500 transition">
                        Популярные туры
                    </a>
                    <a href="#" className="hover:text-orange-500 transition">
                        О нас
                    </a>
                    <a href="#" className="hover:text-orange-500 transition">
                        Контакты
                    </a>
                    <button className="w-full h-[45px] bg-[#2C2C2C] text-white rounded-[12px] hover:bg-black transition">
                        Свяжитесь с нами
                    </button>
                </nav>
            </div>
        </header>
    );
}

export default Header;