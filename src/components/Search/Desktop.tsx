import React, { useState, useRef, useEffect } from "react";
import { DateRange } from "react-date-range";
import { ru } from "date-fns/locale";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import HotelsResults from "../Hotel";
import "./style.scss";

export default function SearchDesktop() {
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

    return (
        <>
            <section id="search" className={`search py-10 ${showResults ? 'search--minimized' : ''}`}>
                <div className="container">
                    <div className="search__content flex flex-col items-center gap-4">
                        <h1 className="search__title text-2xl font-bold text-center mb-4">
                            Найти тур
                        </h1>

                        {/* Переключатели */}
                        <div className="search-tour flex rounded-[16px] p-1 bg-white gap-2">
                            <button className="w-[140px] h-[32px] rounded-[12px] bg-[#397bba] text-white text-sm">
                                Тур
                            </button>
                            <button className="w-[140px] h-[32px] rounded-[12px] text-sm">
                                Отели
                            </button>
                            <button className="w-[140px] h-[32px] rounded-[12px] text-sm">
                                Авиабилеты
                            </button>
                        </div>

                        <div className="flex items-center justify-center gap-4">
                            <div
                                ref={wrapperRef}
                                className="search-ticket flex rounded-[16px] overflow-visible relative"
                            >
                                {/* Откуда */}
                                <div className="relative">
                                    <button
                                        onClick={() => {
                                            setOpenFrom((s) => !s);
                                            setOpenTo(false);
                                            setOpenDates(false);
                                            setOpenTourists(false);
                                            setOpenBudget(false);
                                            setValidationError("");
                                        }}
                                        className={`w-[185px] h-[52px] px-6 bg-white border-r border-[#f8f8f8] text-left ${from === "Откуда" ? "text-gray-400" : "text-black"
                                            }`}
                                    >
                                        {from}
                                    </button>

                                    {openFrom && (
                                        <div className="absolute top-full left-0 mt-2 w-[240px] bg-white shadow-lg rounded-md z-50">
                                            {cities.map((city) => (
                                                <div
                                                    key={city}
                                                    onClick={() => {
                                                        setFrom(city);
                                                        setOpenFrom(false);
                                                        setValidationError("");
                                                    }}
                                                    className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
                                                >
                                                    {city}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Куда */}
                                <div className="relative">
                                    <button
                                        onClick={() => {
                                            setOpenTo((s) => !s);
                                            setOpenFrom(false);
                                            setOpenDates(false);
                                            setOpenTourists(false);
                                            setOpenBudget(false);
                                            setValidationError("");
                                        }}
                                        className={`w-[185px] h-[52px] px-6 bg-white border-r border-[#f8f8f8] text-left ${to === "Куда" ? "text-gray-400" : "text-black"
                                            }`}
                                    >
                                        {to}
                                    </button>

                                    {openTo && (
                                        <div className="absolute top-full left-0 mt-2 w-[240px] bg-white shadow-lg rounded-md z-50">
                                            {countries.map((c) => (
                                                <div
                                                    key={c.name}
                                                    onClick={() => {
                                                        setTo(c.name);
                                                        setOpenTo(false);
                                                        setValidationError("");
                                                    }}
                                                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer"
                                                >
                                                    <span>{c.flag}</span>
                                                    <span>{c.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Даты */}
                                <div className="relative">
                                    <button
                                        onClick={() => {
                                            setOpenDates((s) => !s);
                                            setOpenFrom(false);
                                            setOpenTo(false);
                                            setOpenTourists(false);
                                            setOpenBudget(false);
                                            setValidationError("");
                                        }}
                                        className={`w-[185px] h-[52px] px-6 bg-white border-r border-[#f8f8f8] text-left ${!dateRange[0].startDate ? "text-gray-400" : "text-black"
                                            }`}
                                    >
                                        {dateRange[0].startDate && dateRange[0].endDate
                                            ? `${dateRange[0].startDate.toLocaleDateString("ru-RU")} - ${dateRange[0].endDate.toLocaleDateString("ru-RU")}`
                                            : "Даты"}
                                    </button>

                                    {openDates && (
                                        <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md z-50">
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
                                            />
                                        </div>
                                    )}
                                </div>

                                {/* Туристы */}
                                <div className="relative">
                                    <button
                                        onClick={() => {
                                            setOpenTourists((s) => !s);
                                            setOpenFrom(false);
                                            setOpenTo(false);
                                            setOpenDates(false);
                                            setOpenBudget(false);
                                            setValidationError("");
                                        }}
                                        className="w-[185px] h-[52px] px-6 bg-white border-r border-[#f8f8f8] text-left"
                                    >
                                        {`${adults > 1 ? adults + " Туристы" : "Турист"}${children > 0 ? `, ${children} Ребенок${children > 1 ? "а" : ""}` : ""}`}
                                    </button>

                                    {openTourists && (
                                        <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md z-50 p-4 w-[240px]">
                                            <div className="flex items-center justify-between mb-3">
                                                <span>Взрослые</span>
                                                <div className="flex items-center gap-2">
                                                    <button onClick={() => setAdults(Math.max(1, adults - 1))} className="w-8 h-8 bg-gray-200 rounded">-</button>
                                                    <span>{adults}</span>
                                                    <button onClick={() => setAdults(adults + 1)} className="w-8 h-8 bg-gray-200 rounded">+</button>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between mb-3">
                                                <span>Дети</span>
                                                <div className="flex items-center gap-2">
                                                    <button onClick={() => setChildren(Math.max(0, children - 1))} className="w-8 h-8 bg-gray-200 rounded">-</button>
                                                    <span>{children}</span>
                                                    <button onClick={() => setChildren(children + 1)} className="w-8 h-8 bg-gray-200 rounded">+</button>
                                                </div>
                                            </div>
                                            <button onClick={() => setOpenTourists(false)} className="w-full bg-orange-500 text-white py-2 rounded-lg">Выбрать</button>
                                        </div>
                                    )}
                                </div>

                                {/* Бюджет */}
                                <div className="relative">
                                    <button
                                        onClick={() => {
                                            setOpenBudget((s) => !s);
                                            setOpenFrom(false);
                                            setOpenTo(false);
                                            setOpenDates(false);
                                            setOpenTourists(false);
                                            setValidationError("");
                                        }}
                                        className={`w-[185px] h-[52px] px-6 bg-white text-left ${!budget ? "text-gray-400" : "text-black"
                                            }`}
                                    >
                                        {budget || "Бюджет"}
                                    </button>

                                    {openBudget && (
                                        <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md z-50 p-4 w-[240px]">
                                            <input
                                                type="number"
                                                placeholder="Сумма в сомах"
                                                className="w-full border rounded-lg px-3 py-2 mb-2"
                                                onChange={(e) => {
                                                    setBudget(`${e.target.value} сом`);
                                                    setValidationError("");
                                                }}
                                            />
                                            <input
                                                type="number"
                                                placeholder="Сумма в $"
                                                className="w-full border rounded-lg px-3 py-2 mb-2"
                                                onChange={(e) => {
                                                    setBudget(`$${e.target.value}`);
                                                    setValidationError("");
                                                }}
                                            />
                                            <button onClick={() => setOpenBudget(false)} className="w-full bg-orange-500 text-white py-2 rounded-lg">Выбрать</button>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="search-yellow flex flex-col items-center">
                                <button
                                    onClick={handleSearch}
                                    disabled={isLoading}
                                    className={`rounded-[16px] py-3 px-10 w-[166px] h-[51px] bg-[#f78c1f] text-white font-semibold hover:bg-[#e67e1a] transition-colors ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
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
