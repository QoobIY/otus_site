import React from 'react'
import './style.scss'

const Header = () => {
    return (
        <header className="header">
            <div className="header__title">Курсы по веб-программированию для начинающих</div>
            <div className="nav">
                <a href="promo.html" className="nav__item">Главная</a>
                <a href="courses.html" className="nav__item">Курсы</a>
                <a href="schedule.html" className="nav__item">Расписание</a>
                <a href="#" className="nav__item">Преподаватели</a>
                <a href="#" className="nav__item">Профиль</a>
            </div>
        </header>
    )
};

export default Header;