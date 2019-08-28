import React from 'react'
import './style.scss'
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <header className="header">
            <div className="header__title">Курсы по веб-программированию для начинающих</div>
            <div className="nav">
                <Link to="/" className="nav__item">Главная</Link>
                <Link to="/courses" className="nav__item">Курсы</Link>
                <Link to="/schedule" className="nav__item">Расписание</Link>
                <Link to="#" className="nav__item">Преподаватели</Link>
                <Link to="/login" className="nav__item">Войти</Link>
                <Link to="/profile" className="nav__item">Профиль</Link>
            </div>
        </header>
    )
};

export default Header;