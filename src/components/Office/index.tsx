import './style.scss';
import logo from '../../assets/Office/logodes.svg';

function Office() {
    return (
        <div id='contacts' className="office-card">
            <div className="container">
                <div className="office-content">
                    <div className="right">
                        <div className="office-info">
                            <h1>Центральный офис</h1>
                            <p>Ул.Токтогула 125/1 (Бизнес-Центр Авангард)</p>
                            <p>+996 559 556 555</p>
                            <p>palmtravel@gmail.com</p>
                        </div>
                        <img
                            className='office-logo'
                            src={logo} alt="" />
                    </div>



                    <div className="consultation-section">
                        <h2>Консультация</h2>
                        <p className="consultation-description">Наш менеджер свяжется с вами в ближайшее время</p>

                        <form className="consultation-form">
                            <div className="input-field">
                                <input type="text" placeholder="Ваше имя" />
                            </div>
                            <div className="input-field">
                                <input type="telephone" placeholder="Телефон" />
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
        </div>
    );
}

export default Office;