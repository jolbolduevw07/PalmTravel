import './style.scss'

export default function Search() {
    return (
        <section className="search py-10">
            <div className="container">
                <div className="search__content flex flex-col items-center gap-4 md:mb-[120px]">

                    {/* Заголовок */}
                    <h1 className="search__title text-2xl font-bold text-center mb-4">
                        Найти тур
                    </h1>

                    {/* Переключатели: Тур / Отели / Авиабилеты */}
                    <div className="search-tour flex rounded-[16px] p-1 bg-white w-[358px] md:w-auto md:gap-2">
                        <button className="search-tour__btns flex-1 md:w-[140px] h-[32px] rounded-[12px] bg-[#397bba] text-white text-sm">
                            Тур
                        </button>
                        <button className="search-tour__btns flex-1 md:w-[140px] h-[32px] rounded-[12px] text-sm">
                            Отели
                        </button>
                        <button className="search-tour__btns flex-1 md:w-[140px] h-[32px] rounded-[12px] text-sm">
                            Авиабилеты
                        </button>
                    </div>

                    {/* Блок с фильтрами + кнопка "Найти" */}
                    <div className="flex flex-col gap-3 w-[358px] md:flex-row md:items-center md:justify-center md:gap-4 md:w-auto">
                        <div className="search-ticket flex flex-col md:flex-row rounded-[16px] overflow-hidden">
                            <button className="w-[185px] h-[52px] px-12 py-2 bg-white border-r border-[#f8f8f8] backdrop-blur-[120px]">
                                Откуда
                            </button>
                            <button className="w-[40px] h-[52px] px-6 py-2 bg-white border-r border-[#f8f8f8] backdrop-blur-[120px]">
                                ↔️
                            </button>
                            <button className="w-[185px] h-[52px] px-12 py-2 bg-white border-r border-[#f8f8f8] backdrop-blur-[120px]">
                                Куда
                            </button>
                            <button className="w-[185px] h-[52px] px-12 py-2 bg-white border-r border-[#f8f8f8] backdrop-blur-[120px]">
                                Даты
                            </button>
                            <button className="w-[185px] h-[52px] px-12 py-2 bg-white border-r border-[#f8f8f8] backdrop-blur-[120px]">
                                Туристы
                            </button>
                            <button className="w-[185px] h-[52px] px-12 py-2 bg-white backdrop-blur-[120px]">
                                Бюджет
                            </button>
                        </div>

                        {/* Кнопка справа */}
                        <div className="search-yellow">
                            <button className="rounded-[16px] py-3 px-10 w-full md:w-[166px] h-[51px] bg-[#f78c1f] text-white font-semibold">
                                Найти
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}