import React from 'react'
import './style.scss'
import T from 'prop-types';

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
    course: T.shape({
        name: T.string,
        description: T.string,
        date: T.string,
        classes: T.string,
    })
};
export default Course;