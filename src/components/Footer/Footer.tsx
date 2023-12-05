import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">

                <h1 className="footer__title">Журавский</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#home" className="footer__link">Главная</a>
                    </li>
                    {/* <li>
                        <a href="#about" className="footer__link">О себе</a>
                    </li> */}
                    <li>
                        <a href="#portfolio" className="footer__link">Портфолио</a>
                    </li>
                </ul>

                <div className="footer__social">

                    <a href="https://m.vk.com/id185739732" className="footer__social-link"
                        target="_blank">
                        <i className='bx bxl-vk'></i>
                    </a>

                    <a href="https://t.me/MatveyMCHS" className="footer__social-link"
                        target="_blank">
                        <i className='bx bxl-telegram' ></i>
                    </a>

                    <a href="https://github.com/textil24" className="footer__social-link"
                        target="_blank">
                        <i className="uil uil-github-alt"></i>
                    </a>

                </div>

                <span className="footer__copy">&#169; textil24. All rights reserved</span>
            </div>
        </footer>
    );
};

export default Footer;