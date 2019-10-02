import React from 'react';
import './style.scss';
import Course from '../course';
import T from 'prop-types';

const Courses = (props) => {
    return (
        <div className="courses">
            <div className="courses__list">
                {
                    props.courses.map( (course, key) => (
                        <Course key={key} course={course}/>
                        )
                    )
                }
            </div>
        </div>
    )
};

Courses.propTypes = {
    courses: T.array.isRequired
};

export default Courses;