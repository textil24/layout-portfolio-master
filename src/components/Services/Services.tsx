import React, { useState } from 'react';
import "./Services.css"

const Services = () => {

    const [toggleState, setToggleState] = useState(0)

    const toggleTab = (index: number) => {
        setToggleState(index)
    }

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Услуги</h2>
            <span className="section__subtitle">Что я предлагаю?</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">
                        Дизайн, <br /> Верстка</h3>
                    </div>

                    <span onClick={() => toggleTab(1)} className="services__button">
                        Смотреть подробнее <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Web Designer</h3>
                            <p className="services__modal-description">
                                Я специализируюсь на создании привлекательных пользовательских интерфейсов и опыта, включая визуальный дизайн.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Разработка пользовательского интерфейса (UI) и пользовательского опыта (UX).
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Создание визуального дизайна и компоновки элементов на веб-странице.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Работа с графическими редакторами, такими как Photoshop или Figma, для создания дизайн-макетов.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Управление типографикой, цветами, иконками и другими визуальными элементами.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Создание прототипов и тестирование пользовательского интерфейса.
                                    </p>
                                </li>

                            </ul>

                        </div>

                    </div>

                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">
                            Frontend <br /> разработка</h3>
                    </div>

                    <span onClick={() => toggleTab(2)} className="services__button">
                        Смотреть подробнее <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Frontend разработка</h3>
                            <p className="services__modal-description">
                                Я создаю и улучшаю пользовательский интерфейс веб-приложений, включая дизайн, визуальное оформление, интерактивность и оптимизацию, чтобы обеспечить удобство использования и положительный пользовательский опыт.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Разработка клиентской части веб-приложения.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Создание и разметка веб-страниц с помощью HTML и CSS/SCSS/Tailwind.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Работа с JavaScript/TypeScript для добавления интерактивности и функциональности на стороне клиента.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Работа с фреймворком и библиотеками, такими как React и Redux Toolkit, для ускорения разработки и улучшения модульности.

                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Интеграция с внешними API и сервисами.
                                    </p>
                                </li>

                            </ul>

                        </div>
                    </div>

                </div>

                <div className="services__content">
                    <div>
                        <i className='bx bx-server services__icon'></i>
                        {/* <i className="uil uil-edit services__icon"></i> */}
                        <h3 className="services__title">
                            Backend <br /> разработка</h3>
                    </div>

                    <span onClick={() => toggleTab(3)} className="services__button">
                        Смотреть подробнее <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Backend разработка</h3>
                            <p className="services__modal-description">
                                В бэкенд-разработке я создаю и управляю серверной частью веб-приложений, обрабатываю запросы, работаю с базами данных, реализую бизнес-логику и использую серверные технологии и фреймворки, включая NodeJS и NestJS.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Разработка серверной части веб-приложения.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Управление запросами от клиентской стороны и обработка данных.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Работа с базами данных для хранения и извлечения информации.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Реализация бизнес-логики и алгоритмов приложения.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Работа с серверными технологиями и фреймворками, такими как NodeJS и NestJS
                                    </p>
                                </li>

                            </ul>

                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default Services;