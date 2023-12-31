import React, {useState} from 'react';
import "./Header.css"

const Header = () => {

    const [toggle, setToggle] = useState(false)

    return (
        <header className="header">
            <nav className="nav container">

                <a href="index.html" className="nav__logo">
                    Журавский
                </a>

                <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">

                        <li className="nav__item">
                            <a href="#home" className="nav__link" onClick={() => setToggle(false)}>
                                <i className="uil uil-estate nav__icon"></i>
                                Главная
                            </a>
                        </li>

                        {/* <li className="nav__item">
                            <a href="#about" className="nav__link"  onClick={() => setToggle(false)}>
                                <i className="uil uil-user nav__icon"></i>
                                О себе
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#skills" className="nav__link"  onClick={() => setToggle(false)}>
                                <i className="uil uil-file-alt nav__icon"></i>
                                Навыки
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#services" className="nav__link"  onClick={() => setToggle(false)}>
                                <i className="uil uil-briefcase-alt nav__icon"></i>
                                Услуги
                            </a>
                        </li> */}

                        <li className="nav__item">
                            <a href="#portfolio" className="nav__link"  onClick={() => setToggle(false)}>
                                <i className="uil uil-scenery nav__icon"></i>
                                Портфолио
                            </a>
                        </li>

                        {/* <li className="nav__item" onClick={() => setToggle(false)}>
                            <a href="#contact" className="nav__link">
                                <i className="uil uil-message nav__icon"></i>
                                Контакты
                            </a>
                        </li> */}

                    </ul>

                    <i
                        className="uil uil-times nav__close"
                        onClick={() => setToggle(!toggle)}
                    ></i>

                </div>

                <div className="nav__toggle"
                     onClick={() => setToggle(!toggle)}
                >
                    <i className="uil uil-apps"></i>
                </div>

            </nav>
        </header>
    );
};

export default Header;