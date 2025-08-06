import logo from '../../assets/Header/logo.svg';
import './style.scss';

function Header() {
    return (
        <>
            <section className="header">
                <div className="container">
                    <div className="header__content bg-black">
                        <div className="header__logo">
                            <img src={logo} alt="logo" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Header