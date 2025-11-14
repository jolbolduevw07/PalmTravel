import React, { useState, useRef, useEffect } from "react";
import { DateRange } from "react-date-range";
import { ru } from "date-fns/locale";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import HotelsResults from "../Hotel";
import "./style.scss";

export default function SearchMobile() {
    const [openFrom, setOpenFrom] = useState(false);
    const [openTo, setOpenTo] = useState(false);
    const [openDates, setOpenDates] = useState(false);
    const [openTourists, setOpenTourists] = useState(false);
    const [openBudget, setOpenBudget] = useState(false);
    const [validationError, setValidationError] = useState("");
    const [showResults, setShowResults] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [from, setFrom] = useState("Откуда");
    const [to, setTo] = useState("Куда");
    const [dateRange, setDateRange] = useState([
        {
            startDate: null,
            endDate: null,
            key: "selection",
        },
    ]);
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [budget, setBudget] = useState("");

    const wrapperRef = useRef(null);
    const resultsRef = useRef(null);

    const cities = ["Алматы", "Бишкек", "Москва", "Ташкент"];
    const countries = [
        { name: "Корея", flag: "🇰🇷" },
        { name: "Казахстан", flag: "🇰🇿" },
        { name: "Япония", flag: "🇯🇵" },
        { name: "Марокко", flag: "🇲🇦" },
    ];

    // Закрывать меню при клике вне
    useEffect(() => {
        function handleDocClick(e) {
            if (!wrapperRef.current) return;
            if (!wrapperRef.current.contains(e.target)) {
                setOpenFrom(false);
                setOpenTo(false);
                setOpenDates(false);
                setOpenTourists(false);
                setOpenBudget(false);
            }
        }
        document.addEventListener("mousedown", handleDocClick);
        return () => document.removeEventListener("mousedown", handleDocClick);
    }, []);

    // Прокрутка к результатам при их появлении
    useEffect(() => {
        if (showResults && resultsRef.current) {
            setTimeout(() => {
                resultsRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 100);
        }
    }, [showResults]);

    const handleSearch = () => {
        if (from === "Откуда") {
            setValidationError("Пожалуйста, выберите город отправления");
            return;
        }
        if (to === "Куда") {
            setValidationError("Пожалуйста, выберите страну назначения");
            return;
        }
        if (!dateRange[0].startDate || !dateRange[0].endDate) {
            setValidationError("Пожалуйста, выберите даты поездки");
            return;
        }
        if (!budget) {
            setValidationError("Пожалуйста, укажите бюджет");
            return;
        }

        setValidationError("");
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            setShowResults(true);
        }, 1500);
    };

    const handleBackToSearch = () => {
        setShowResults(false);
    };

    // Функция для закрытия всех панелей
    const closeAllPanels = () => {
        setOpenFrom(false);
        setOpenTo(false);
        setOpenDates(false);
        setOpenTourists(false);
        setOpenBudget(false);
    };

    return (
        <>
            <section className="searchMobile bg-white shadow-md py-6">
                <div className="container">
                    <div className="searchMobile__content flex flex-col items-center">
                        <h2 className="searchMobile__title text-[24px] text-center text-[#081b2f] mb-4">
                            Найти тур
                        </h2>

                        {/* Кнопки Тур/Отели/Авиабилеты */}
                        <div className="searchMobile-tour__btns flex justify-center items-center rounded-[16px] p-1 w-[358px] h-[40px] bg-[#fff] mb-[4px]">
                            <button className="flex-1 text-xs text-center text-white rounded-[12px] h-[32px] bg-[#397bba] mx-1">Тур</button>
                            <button className="flex-1 text-xs text-center text-[#a8a8a8] rounded-[12px] h-[32px] mx-1">Отели</button>
                            <button className="flex-1 text-xs text-center text-[#a8a8a8] rounded-[12px] h-[32px] mx-1">Авиабилеты</button>
                        </div>

                        {/* Поля формы */}
                        <div 
                            ref={wrapperRef}
                            className="searchMobile-tour__from flex flex-wrap justify-center rounded-[16px] w-[358px] bg-white overflow-hidden mb-[4px]"
                        >
                            {/* Откуда */}
                            <div className="relative w-1/2 border-r border-b border-[#f8f8f8]">
                                <button
                                    onClick={() => {
                                        closeAllPanels();
                                        setOpenFrom(true);
                                        setValidationError("");
                                    }}
                                    className={`w-full h-[52px] backdrop-blur-[120px] bg-white flex items-center justify-center text-sm ${from === "Откуда" ? "text-gray-400" : "text-[#121212]"}`}
                                >
                                    {from}
                                </button>

                                {/* Панель Откуда */}
                                <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end justify-center transition-all duration-300 ${openFrom ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                                    <div className={`bg-white rounded-t-3xl w-full max-w-lg transform transition-transform duration-300 ${openFrom ? 'translate-y-0' : 'translate-y-full'}`}>
                                        {/* Заголовок */}
                                        <div className="p-4 border-b border-gray-200">
                                            <h3 className="font-semibold text-lg text-center">Откуда</h3>
                                        </div>
                                        
                                        {/* Поиск */}
                                        <div className="p-4 border-b border-gray-200">
                                            <input
                                                type="text"
                                                placeholder="Помск"
                                                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm"
                                            />
                                        </div>
                                        
                                        {/* Список городов */}
                                        <div className="max-h-60 overflow-y-auto">
                                            {cities.map((city) => (
                                                <div
                                                    key={city}
                                                    onClick={() => {
                                                        setFrom(city);
                                                        setOpenFrom(false);
                                                        setValidationError("");
                                                    }}
                                                    className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0 active:bg-gray-100 transition-colors"
                                                >
                                                    {city}
                                                </div>
                                            ))}
                                        </div>
                                        
                                        {/* Кнопка Найти */}
                                        <div className="p-4">
                                            <button 
                                                onClick={() => setOpenFrom(false)}
                                                className="w-full bg-[#397bba] text-white py-3 rounded-lg font-medium active:scale-95 transition-transform"
                                            >
                                                Найти
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Куда */}
                            <div className="relative w-1/2 border-b border-[#f8f8f8]">
                                <button
                                    onClick={() => {
                                        closeAllPanels();
                                        setOpenTo(true);
                                        setValidationError("");
                                    }}
                                    className={`w-full h-[52px] backdrop-blur-[120px] bg-white flex items-center justify-center text-sm ${to === "Куда" ? "text-gray-400" : "text-[#121212]"}`}
                                >
                                    {to}
                                </button>

                                {/* Панель Куда */}
                                <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end justify-center transition-all duration-300 ${openTo ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                                    <div className={`bg-white rounded-t-3xl w-full max-w-lg transform transition-transform duration-300 ${openTo ? 'translate-y-0' : 'translate-y-full'}`}>
                                        {/* Заголовок */}
                                        <div className="p-4 border-b border-gray-200">
                                            <h3 className="font-semibold text-lg text-center">Куда</h3>
                                        </div>
                                        
                                        {/* Поиск */}
                                        <div className="p-4 border-b border-gray-200">
                                            <input
                                                type="text"
                                                placeholder="Поиск страны"
                                                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm"
                                            />
                                        </div>
                                        
                                        {/* Список стран */}
                                        <div className="max-h-60 overflow-y-auto">
                                            {countries.map((c) => (
                                                <div
                                                    key={c.name}
                                                    onClick={() => {
                                                        setTo(c.name);
                                                        setOpenTo(false);
                                                        setValidationError("");
                                                    }}
                                                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0 active:bg-gray-100 transition-colors"
                                                >
                                                    <span className="text-lg">{c.flag}</span>
                                                    <span>{c.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                        
                                        {/* Кнопка Найти */}
                                        <div className="p-4">
                                            <button 
                                                onClick={() => setOpenTo(false)}
                                                className="w-full bg-[#397bba] text-white py-3 rounded-lg font-medium active:scale-95 transition-transform"
                                            >
                                                Найти
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Даты */}
                            <div className="relative w-1/2 border-r border-b border-[#f8f8f8]">
                                <button
                                    onClick={() => {
                                        closeAllPanels();
                                        setOpenDates(true);
                                        setValidationError("");
                                    }}
                                    className={`w-full h-[52px] backdrop-blur-[120px] bg-white flex items-center justify-center text-sm ${!dateRange[0].startDate ? "text-gray-400" : "text-[#121212]"}`}
                                >
                                    {dateRange[0].startDate && dateRange[0].endDate
                                        ? `${dateRange[0].startDate.toLocaleDateString("ru-RU")} - ${dateRange[0].endDate.toLocaleDateString("ru-RU")}`
                                        : "Даты"}
                                </button>

                                {/* Панель Даты */}
                                <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end justify-center transition-all duration-300 ${openDates ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                                    <div className={`bg-white rounded-t-3xl w-full max-w-lg transform transition-transform duration-300 ${openDates ? 'translate-y-0' : 'translate-y-full'}`}>
                                        {/* Заголовок */}
                                        <div className="p-4 border-b border-gray-200">
                                            <h3 className="font-semibold text-lg text-center">Дата</h3>
                                        </div>
                                        
                                        {/* Подзаголовок */}
                                        <div className="p-4 border-b border-gray-200">
                                            <p className="text-gray-600 text-center">Выберите дату</p>
                                        </div>
                                        
                                        {/* Календарь */}
                                        <div className="p-4">
                                            <DateRange
                                                ranges={dateRange}
                                                onChange={(item) => {
                                                    setDateRange([item.selection]);
                                                    setValidationError("");
                                                }}
                                                moveRangeOnFirstSelection={false}
                                                months={1}
                                                direction="horizontal"
                                                locale={ru}
                                                className="w-full"
                                            />
                                        </div>
                                        
                                        {/* Кнопка выбора */}
                                        <div className="p-4 border-t border-gray-200">
                                            <button 
                                                onClick={() => setOpenDates(false)}
                                                className="w-full bg-[#397bba] text-white py-3 rounded-lg font-medium active:scale-95 transition-transform"
                                            >
                                                Выбрать
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Туристы */}
                            <div className="relative w-1/2 border-b border-[#f8f8f8]">
                                <button
                                    onClick={() => {
                                        closeAllPanels();
                                        setOpenTourists(true);
                                        setValidationError("");
                                    }}
                                    className="w-full h-[52px] backdrop-blur-[120px] bg-white flex items-center justify-center text-sm text-[#121212]"
                                >
                                    {`${adults > 1 ? adults + " Туристы" : "Турист"}${children > 0 ? `, ${children} Ребенок${children > 1 ? "а" : ""}` : ""}`}
                                </button>

                                {/* Панель Туристы */}
                                <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end justify-center transition-all duration-300 ${openTourists ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                                    <div className={`bg-white rounded-t-3xl w-full max-w-lg transform transition-transform duration-300 ${openTourists ? 'translate-y-0' : 'translate-y-full'}`}>
                                        {/* Заголовок */}
                                        <div className="p-4 border-b border-gray-200">
                                            <h3 className="font-semibold text-lg text-center">Туристы</h3>
                                        </div>
                                        
                                        {/* Взрослые */}
                                        <div className="p-4 border-b border-gray-200">
                                            <div className="flex justify-between items-center">
                                                <span className="text-gray-700">{adults} Взрослых</span>
                                                <div className="flex items-center gap-3">
                                                    <button
                                                        onClick={() => setAdults(Math.max(1, adults - 1))}
                                                        className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 active:scale-95 transition-transform"
                                                    >
                                                        <span className="text-gray-600 text-lg">−</span>
                                                    </button>
                                                    <span className="w-6 text-center font-medium">{adults}</span>
                                                    <button
                                                        onClick={() => setAdults(adults + 1)}
                                                        className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 active:scale-95 transition-transform"
                                                    >
                                                        <span className="text-gray-600 text-lg">+</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Кнопка добавить ребенка */}
                                        <div className="p-4 border-b border-gray-200">
                                            <button className="w-full text-blue-600 py-3 border border-dashed border-gray-300 rounded-lg hover:bg-blue-50 active:scale-95 transition-all">
                                                Добавить ребенка
                                            </button>
                                        </div>
                                        
                                        {/* Кнопка выбора */}
                                        <div className="p-4">
                                            <button 
                                                onClick={() => setOpenTourists(false)}
                                                className="w-full bg-[#397bba] text-white py-3 rounded-lg font-medium active:scale-95 transition-transform"
                                            >
                                                Выбрать
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Бюджет */}
                            <div className="relative w-full">
                                <button
                                    onClick={() => {
                                        closeAllPanels();
                                        setOpenBudget(true);
                                        setValidationError("");
                                    }}
                                    className={`w-full h-[52px] backdrop-blur-[120px] bg-white flex items-center justify-center text-sm ${!budget ? "text-gray-400" : "text-[#121212]"}`}
                                >
                                    {budget || "Бюджет"}
                                </button>

                                {/* Панель Бюджет */}
                                <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end justify-center transition-all duration-300 ${openBudget ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                                    <div className={`bg-white rounded-t-3xl w-full max-w-lg transform transition-transform duration-300 ${openBudget ? 'translate-y-0' : 'translate-y-full'}`}>
                                        {/* Заголовок */}
                                        <div className="p-4 border-b border-gray-200">
                                            <h3 className="font-semibold text-lg text-center">Бюджет</h3>
                                        </div>
                                        
                                        {/* Поле для сомов */}
                                        <div className="p-4 border-b border-gray-200">
                                            <label className="block text-sm font-medium mb-2">Сумма в сомах</label>
                                            <input
                                                type="number"
                                                placeholder="Введите сумму"
                                                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm"
                                                onChange={(e) => {
                                                    setBudget(`${e.target.value} сом`);
                                                    setValidationError("");
                                                }}
                                            />
                                        </div>
                                        
                                        {/* Поле для долларов */}
                                        <div className="p-4 border-b border-gray-200">
                                            <label className="block text-sm font-medium mb-2">Сумма в $</label>
                                            <input
                                                type="number"
                                                placeholder="Введите сумму"
                                                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm"
                                                onChange={(e) => {
                                                    setBudget(`$${e.target.value}`);
                                                    setValidationError("");
                                                }}
                                            />
                                        </div>
                                        
                                        {/* Кнопка выбора */}
                                        <div className="p-4">
                                            <button 
                                                onClick={() => setOpenBudget(false)}
                                                className="w-full bg-[#397bba] text-white py-3 rounded-lg font-medium active:scale-95 transition-transform"
                                            >
                                                Выбрать
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Кнопка Найти */}
                        <button
                            onClick={handleSearch}
                            disabled={isLoading}
                            className="searchMobile-tour__how rounded-[16px] w-[358px] h-[51px] bg-[#f78c1f] text-white font-medium text-sm flex items-center justify-center active:scale-95 transition-transform"
                        >
                            {isLoading ? (
                                <div className="flex items-center justify-center gap-2">
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    Поиск...
                                </div>
                            ) : (
                                "Найти"
                            )}
                        </button>

                        {/* Сообщение об ошибке */}
                        {validationError && (
                            <div className="mt-2 text-red-500 text-sm text-center max-w-[300px]">
                                {validationError}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Анимированное появление результатов */}
            {showResults && (
                <div
                    ref={resultsRef}
                    className="results-container"
                >
                    <HotelsResults onBackToSearch={handleBackToSearch} />
                </div>
            )}
        </>
    );
}