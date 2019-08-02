import {get} from './utils'

const init = () => {
    const courseList = document.querySelector('.courses__list');

    get('/api/courses').
        then( res => {
            res.forEach( el => {
                const course = document.createElement('div'),
                    courseTitle = document.createElement('div'),
                    courseDescription = document.createElement('div'),
                    courseDate = document.createElement('div');
                course.className='course';
                courseTitle.className='course__title';
                courseDescription.className='course__description';
                courseDate.className='course__date';
                courseTitle.innerText = el.name;
                courseDescription.innerText = el.description;
                courseDate.innerText = Date().toString();
                course.appendChild(courseTitle);
                course.appendChild(courseDescription);
                course.appendChild(courseDate);
                courseList.appendChild(course);
            });
    });
};

window.onload = init;