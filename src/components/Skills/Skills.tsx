import React from 'react';
import "./Skills.css"
import Frontend from  "../Frontend/Frontend"
import Backend from "../Backend/Backend";

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Навыки</h2>
            <span className="section__subtitle">Мой технический уровень</span>

            <div className="skills__container container grid">
                <Frontend />
                <Backend />
            </div>
        </section>
    );
};

export default Skills;