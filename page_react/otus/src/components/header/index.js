import React from 'react'
import './style.scss'
import { Link } from "react-router-dom";


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: false
        }
    }

    render() {
        return (
            <header className="header">
                <div className="header__title">Курсы по веб-программированию для начинающих</div>
                <div className="nav">
                    <Link to="/" className="nav__item">Главная</Link>
                    <Link to="/courses" className="nav__item">Курсы</Link>
                    <Link to="/schedule" className="nav__item">Расписание</Link>
                    <Link to="#" className="nav__item">Преподаватели</Link>
                    <Link to="/login" className="nav__item">Войти</Link>
                    {/*<Link className="nav__item" to='/api/logout'>Выйти</Link> */}
                    <Link to="/profile" className="nav__item">Профиль</Link>
                </div>
            </header>
        );
    }
}

export default Header;