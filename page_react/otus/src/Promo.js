import React from 'react'
import teacher1 from './teachers/mblinova.jpg';
import teacher2 from './teachers/esmirnov.jpg';
import teacher3 from './teachers/yasharov.jpg';
import teacher4 from './teachers/ldmirtiev.jpg';
import teacher5 from './teachers/lrozhkova.jpg';
export default class Promo extends React.Component{

    render() {
        return (
            <>
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
                <div className="content">
                    <div className="content__title"> Категории курсов</div>
                    <div className="content__item">
                        <div className="courses">
                            <div className="courses__list">
                                <div className="course course--light">
                                    <div className="course__title">
                                        FRONTEND
                                    </div>
                                    <div className="course__description">
                                        Наша компания предлагает разный спектр курсов по frontend разработке начиная от
                                        верстки
                                        сайтов , заканчивая Javascript'ом
                                        с самыми современными фреймворками: React, Angular, Vue.
                                    </div>
                                    <div className="course__date">Ближайший курс по frontend'у 1-го сентября</div>
                                </div>
                                <div className="course course--dark">
                                    <div className="course__title">
                                        BACKEND
                                    </div>
                                    <div className="course__description">
                                        В данную катерогрию входят курсы, которые научат вас работать с серверной
                                        частью,скрыто от
                                        глаз пользователя и происходит вне его браузера и компьютера.
                                        Вы научитесь создавать и интегрировать базы данных, обеспечивать безопасность,
                                        создавать
                                        технологии резервного копирования и восстановления.
                                        Backend-разработчик может применять любые инструменты, доступные на его сервере.
                                        Предлагаются на выбор курсы Ruby, PHP, Python, Java.
                                    </div>
                                    <div className="course__date">Ближайший курс по backend'у 1-го 1 августа</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    < div className="content__title"> Список преподавателей</div>
                    <div className="content__item">
                        <div className="teachers">
                            <div className="teachers__list">
                                <div className="teacher">
                                    <div className="teacher__title">
                                        Марина Блинова
                                    </div>
                                    <img className="teacher__image" src={teacher1} alt=""/>
                                    <div className="teacher__description">Разработчик Python</div>
                                </div>
                                <div className="teacher">
                                    <div className="teacher__title">
                                        Евгений Смирнов
                                    </div>
                                    <img className="teacher__image" src={teacher2} alt=""/>
                                    <div className="teacher__description">Руководитель разработки</div>
                                </div>
                                <div className="teacher">
                                    <div className="teacher__title">
                                        Ярослав Шаров
                                    </div>
                                    <img className="teacher__image" src={teacher3} alt=""/>
                                    <div className="teacher__description">Разработчик Ruby</div>
                                </div>
                                <div className="teacher">
                                    <div className="teacher__title">
                                        Леонид Дмитриев
                                    </div>
                                    <img className="teacher__image" src={teacher4} alt=""/>
                                    <div className="teacher__description">Разработчик Python</div>
                                </div>
                                <div className="teacher">
                                    <div className="teacher__title">
                                        Лариса Рожкова
                                    </div>
                                    <img className="teacher__image" src={teacher5} alt=""/>
                                    <div className="teacher__description">Реляционные СУБД</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="footer">
                    © 1977-2019 PERSONAL COURSES
                </footer>
            </>
        )
    }

}