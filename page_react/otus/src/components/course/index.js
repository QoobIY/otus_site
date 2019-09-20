import React from 'react'
import './style.scss'
import PropTypes from 'prop-types';

const Course = (props) => {
    return (
        <div className={"course " + props.course.classes}>
            <div className="course__title">
                {props.course.name}
            </div>
            <div className="course__description">
                {props.course.description}
            </div>
            <div className="course__date">{props.course.date}</div>
        </div>
    )
};

Course.propTypes = {
    course: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        date: PropTypes.string,
        classes: PropTypes.string,
    })
};
export default Course;