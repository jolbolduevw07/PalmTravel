import './style.scss';

function Office() {
    return (
        <div className="office-card">
            <div className="office-content">
                <div className="office-info">
                    <h1>Центральный офис</h1>
                    <p>Ул. Советская 110 - 1 этаж</p>
                    <p>+996 500 000</p>
                    <p>palmtravel@gmail.com</p>
                </div>


                <div className="consultation-section">
                    <h2>Консультация</h2>
                    <p className="consultation-description">Наш менеджер свяжется с вами в ближайшее время</p>

                    <form className="consultation-form">
                        <div className="input-field">
                            <input type="text" placeholder="Ваше имя" />
                        </div>
                        <div className="input-field">
                            <input type="tel" placeholder="Телефон" />
                        </div>

                        <button type="submit" className="consultation-btn">
                            Получить консультацию
                        </button>
                    </form>

                    <p className="agreement-text">
                        Нажимая "Отправить", вы принимаете условия обработки персональных данных
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Office;