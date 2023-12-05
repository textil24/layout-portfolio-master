import React, { useState } from "react";
import meta from "../../assets/projects/metaverse.png";
import gericht from "../../assets/projects/gericht.png";
import sushi from "../../assets/projects/sushiman.png";
import hoobank from "../../assets/projects/hoobank.png";

import EdScape from "../../assets/projects/EdScape.png";
import gopnik from "../../assets/projects/Gopnik.png";
import sum from "../../assets/projects/Sum.png";
import pizza from "../../assets/projects/Pizza.png";

import chatgpt from "../../assets/projects/chatgpt.png";
import cloud from "../../assets/projects/cloud.png";

import "./Qualification.css";

const Qualification = () => {
  const [category, setCategory] = useState<number>(0);

  return (
    <section className="qualification section" id="portfolio">
      <h2 className="section__title">Портфолио</h2>
      <span className="section__subtitle">Мои лабораторные работы</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            onClick={() => setCategory(0)}
            className={`qualification__button ${
              category === 0 ? "qualification__active" : ""
            } button--flex`}
          >
            <i
              className={`uil uil-arrow qualification__icon ${
                category === 0 ? "active" : ""
              }`}
            ></i>
            Программирование
          </div>

          <div
            onClick={() => setCategory(1)}
            className={`qualification__button ${
              category === 1 ? "qualification__active" : ""
            } button--flex`}
          >
            <i
              className={`bx bx-server qualification__icon ${
                category === 1 ? "active" : ""
              }`}
            ></i>
            Веб-проектирование
          </div>
        </div>
      </div>

      {/* Верстка */}
      {category === 0 && (
        <div className="qualification__list container">
          <div className="qualification__item">
            <div className="qualification__wrapper">
              <img className="qualification__image" src={"https://logos-world.net/wp-content/uploads/2021/10/Python-Symbol.png"} alt="image" />
            </div>
            <div className="qualification__content">
              <h3 className="qualification__title">
                <a
                  href="https://github.com/textil24/course-works/blob/main/README.md"
                  target="_blank"
                >
                  Программисрование (2 курс)
                </a>
              </h3>
              <a
                href="https://github.com/textil24/course-works/blob/main/README.md"
                className="qualification__demo"
                target="_blank"
              >
                Demo{" "}
                <i className="uil uil-arrow-right qualification__demo-icon"></i>
              </a>
            </div>
          </div>
          <div className="qualification__item">
            <div className="qualification__wrapper">
              <img className="qualification__image" src={"https://logos-world.net/wp-content/uploads/2021/10/Python-Symbol.png"} alt="image" />
            </div>
            <div className="qualification__content">
              <h3 className="qualification__title">
                <a
                  href="https://github.com/textil24/course-works/blob/main/README.md"
                  target="_blank"
                >
                  Программисрование (3 курс)
                </a>
              </h3>
              <a
                href="https://github.com/textil24/course-works/blob/main/README.md"
                className="qualification__demo"
                target="_blank"
              >
                Demo{" "}
                <i className="uil uil-arrow-right qualification__demo-icon"></i>
              </a>
            </div>
          </div>
          <div className="qualification__item">
            <div className="qualification__wrapper">
              <img className="qualification__image" src={"https://logos-world.net/wp-content/uploads/2021/10/Python-Symbol.png"} alt="image" />
            </div>
            <div className="qualification__content">
              <h3 className="qualification__title">
                <a
                  href="https://github.com/textil24/course-works/blob/main/README.md"
                  target="_blank"
                >
                  Программисрование (4 курс)
                </a>
              </h3>
              <a
                href="https://github.com/textil24/course-works/blob/main/README.md"
                className="qualification__demo"
                target="_blank"
              >
                Demo{" "}
                <i className="uil uil-arrow-right qualification__demo-icon"></i>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Frontend */}
      {category === 1 && (
        <div className="qualification__list container">
          <div className="qualification__item">
            <div className="qualification__wrapper">
              <img className="qualification__image" src={"https://wsrubi.ru/upload/iblock/9e5/9e5adc43a346b1b6781993485cd86b93.jpg"} alt="image" />
            </div>
            <div className="qualification__content">
              <h3 className="qualification__title">
                <a
                  href="https://github.com/textil24/course-works/blob/main/README.md"
                  target="_blank"
                >
                  Веб-проектирование
                </a>
              </h3>
              <a
                href="https://github.com/textil24/course-works/blob/main/README.md"
                className="qualification__demo"
                target="_blank"
              >
                Demo{" "}
                <i className="uil uil-arrow-right qualification__demo-icon"></i>
              </a>
            </div>
          </div>
          <div className="qualification__item">
            <div className="qualification__wrapper">
              <img className="qualification__image" src={sushi} alt="image" />
            </div>
            <div className="qualification__content">
              <h3 className="qualification__title">
                <a
                  href="https://github.com/textil24/layout-sushiman"
                  target="_blank"
                >
                  Sushiman (Доп.задание)
                </a>
              </h3>
              <a
                href="https://cerulean-maamoul-a6dc2a.netlify.app/"
                className="qualification__demo"
                target="_blank"
              >
                Demo{" "}
                <i className="uil uil-arrow-right qualification__demo-icon"></i>
              </a>
            </div>
          </div>
          <div className="qualification__item">
            <div className="qualification__wrapper">
              <img className="qualification__image" src={meta} alt="image" />
            </div>
            <div className="qualification__content">
              <h3 className="qualification__title">
                <a
                  href="https://github.com/textil24/layout-metaverse"
                  target="_blank"
                >
                  Metaverse (Доп.задание)
                </a>
              </h3>
              <a
                href="https://github.com/textil24/layout-metaverse"
                className="qualification__demo"
                target="_blank"
              >
                Demo{" "}
                <i className="uil uil-arrow-right qualification__demo-icon"></i>
              </a>
            </div>
          </div>
          <div className="qualification__item">
            <div className="qualification__wrapper">
              <img className="qualification__image" src={gericht} alt="image" />
            </div>
            <div className="qualification__content">
              <h3 className="qualification__title">
                <a
                  href="https://github.com/textil24/layout-gericht"
                  target="_blank"
                >
                  Gericht (Доп.задание)
                </a>
              </h3>
              <a
                href="https://github.com/textil24/layout-gericht"
                className="qualification__demo"
                target="_blank"
              >
                Demo{" "}
                <i className="uil uil-arrow-right qualification__demo-icon"></i>
              </a>
            </div>
          </div>
          <div className="qualification__item">
            <div className="qualification__wrapper">
              <img className="qualification__image" src={hoobank} alt="image" />
            </div>
            <div className="qualification__content">
              <h3 className="qualification__title">
                <a
                  href="https://github.com/textil24/layout-hoobank"
                  target="_blank"
                >
                  Hoobank (Доп.задание)
                </a>
              </h3>
              <a
                href="https://github.com/textil24/layout-hoobank"
                className="qualification__demo"
                target="_blank"
              >
                Demo{" "}
                <i className="uil uil-arrow-right qualification__demo-icon"></i>
              </a>
            </div>
          </div>
          <div className="qualification__item">
            <div className="qualification__wrapper">
              <img className="qualification__image" src={gopnik} alt="image" />
            </div>
            <div className="qualification__content">
              <h3 className="qualification__title">
                <a href="https://t.me/MatveyMCHS" target="_blank">
                  Gopnik Style (Доп.задание)
                </a>
              </h3>
              <a
                href="https://amazing-pavlova-d8f84d.netlify.app/"
                className="qualification__demo"
                target="_blank"
              >
                Demo{" "}
                <i className="uil uil-arrow-right qualification__demo-icon"></i>
              </a>
            </div>
          </div>
          <div className="qualification__item">
            <div className="qualification__wrapper">
              <img className="qualification__image" src={EdScape} alt="image" />
            </div>
            <div className="qualification__content">
              <h3 className="qualification__title">
                <a href="https://t.me/MatveyMCHS" target="_blank">
                  EdScape Telegram (Доп.задание)
                </a>
              </h3>
              <a
                href="https://t.me/webapp321bot"
                className="qualification__demo"
                target="_blank"
              >
                Demo{" "}
                <i className="uil uil-arrow-right qualification__demo-icon"></i>
              </a>
            </div>
          </div>
          <div className="qualification__item">
            <div className="qualification__wrapper">
              <img className="qualification__image" src={sum} alt="image" />
            </div>
            <div className="qualification__content">
              <h3 className="qualification__title">
                <a
                  href="https://github.com/textil24/frontend-sum"
                  target="_blank"
                >
                  Summarize Article (Доп.задание)
                </a>
              </h3>
              <a
                href="https://github.com/textil24/frontend-sum"
                className="qualification__demo"
                target="_blank"
              >
                Demo{" "}
                <i className="uil uil-arrow-right qualification__demo-icon"></i>
              </a>
            </div>
          </div>
          <div className="qualification__item">
            <div className="qualification__wrapper">
              <img className="qualification__image" src={pizza} alt="image" />
            </div>
            <div className="qualification__content">
              <h3 className="qualification__title">
                <a
                  href="https://github.com/textil24/frontend-pizza"
                  target="_blank"
                >
                  Пицца и точка (Доп.задание)
                </a>
              </h3>
              <a
                href="https://github.com/textil24/frontend-pizza"
                className="qualification__demo"
                target="_blank"
              >
                Demo{" "}
                <i className="uil uil-arrow-right qualification__demo-icon"></i>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Backend */}
      {category === 2 && (
        <div className="qualification__list container">
          <div className="qualification__item">
            <div className="qualification__wrapper">
              <img className="qualification__image" src={chatgpt} alt="image" />
            </div>
            <div className="qualification__content">
              <h3 className="qualification__title">
                <a
                  href="https://github.com/textil24/backend-chatgpt"
                  target="_blank"
                >
                  ChatGPT Telegram
                </a>
              </h3>
              <a
                href="https://github.com/textil24/backend-chatgpt"
                className="qualification__demo"
                target="_blank"
              >
                Demo{" "}
                <i className="uil uil-arrow-right qualification__demo-icon"></i>
              </a>
            </div>
          </div>
          <div className="qualification__item">
            <div className="qualification__wrapper">
              <img className="qualification__image" src={cloud} alt="image" />
            </div>
            <div className="qualification__content">
              <h3 className="qualification__title">
                <a
                  href="https://github.com/textil24/backend-cloud-storage"
                  target="_blank"
                >
                  Cloud Storage
                </a>
              </h3>
              <a
                href="https://github.com/textil24/backend-cloud-storage"
                className="qualification__demo"
                target="_blank"
              >
                Demo{" "}
                <i className="uil uil-arrow-right qualification__demo-icon"></i>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Qualification;
