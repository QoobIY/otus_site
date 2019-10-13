import React from 'react';
import teacher1 from '../../images/mblinova.jpg';
import teacher2 from '../../images/esmirnov.jpg';
import teacher3 from '../../images/yasharov.jpg';
import teacher4 from '../../images/ldmirtiev.jpg';
import teacher5 from '../../images/lrozhkova.jpg';

import Courses from '../../components/courses';
import Teachers from '../../components/teachers';

const promoCourses = [
    {
        name: 'FRONTEND',
        description: 'Наша компания предлагает разный спектр курсов по frontend разработке начиная от верстки сайтов , заканчивая Javascript\'ом с самыми современными фреймворками: React, Angular, Vue.',
        date: 'Ближайший курс по frontend\'у 1-го сентября',
        classes: 'course--light',
    },
    {
        name: 'BACKEND',
        description:
            `В данную катерогрию входят курсы, которые научат вас работать с серверной частью,
            скрыто от глаз пользователя и происходит вне его браузера и компьютера. 
            Вы научитесь создавать и интегрировать базы данных, обеспечивать безопасность, 
            создавать технологии резервного копирования и восстановления. 
            Backend-разработчик может применять любые инструменты, доступные на его сервере. 
            Предлагаются на выбор курсы Ruby, PHP, Python, Java.`,
        date: 'Ближайший курс по backend\'у 1-го 1 августа',
        classes: 'course--dark',
    },
];

const promoTeachers = [
    {
        name: 'Марина Блинова',
        image: teacher1,
        position: 'Разработчик Python',
    },
    {
        name: 'Евгений Смирнов',
        image: teacher2,
        position: 'Руководитель разработки',
    },
    {
        name: 'Ярослав Шаров',
        image: teacher3,
        position: 'Разработчик Ruby',
    },
    {
        name: 'Леонид Дмитриев',
        image: teacher4,
        position: 'Разработчик Python',
    },
    {
        name: 'Лариса Рожкова',
        image: teacher5,
        position: 'Реляционные СУБД',
    },
];
export default class Promo extends React.Component{

    render() {
        return (
            <>
                <div className="content">
                    <div className="content__title"> Категории курсов</div>
                    <div className="content__item">
                        <Courses courses={promoCourses}/>
                    </div>
                    < div className="content__title"> Список преподавателей</div>
                    <div className="content__item">
                        <Teachers teachers={promoTeachers}/>
                    </div>
                </div>
            </>
        )
    }

}