const init = () => {
    const course_list = document.querySelector('.courses__list');

    fetch('/api/courses')
        .then(ans => ans.json()).
        then( res => {
            console.log(res);
            res.forEach( el => {
                const course = document.createElement('div'),
                    course_title = document.createElement('div'),
                    course_description = document.createElement('div'),
                    course_date = document.createElement('div');
                course.className='course';
                course_title.className='course__title';
                course_description.className='course__description';
                course_date.className='course__date';
                course_title.innerText = el.name;
                course_description.innerText = el.description;
                course_date.innerText = Date().toString();
                course.appendChild(course_title);
                course.appendChild(course_description);
                course.appendChild(course_date);
                course_list.appendChild(course);
            });
    });
};

window.onload = init;