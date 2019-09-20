import React from 'react';
import './style.scss';
import Course from '../course';
import PropTypes from 'prop-types';

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
    courses: PropTypes.array.isRequired
};

export default Courses;