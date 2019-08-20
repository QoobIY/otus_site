import React from 'react'
import './style.scss'

const Course = (props) => {
    return (
        <div className={"course " + props.course.classes}>
            <div className="course__title">
                {props.course.title}
            </div>
            <div className="course__description">
                {props.course.description}
            </div>
            <div className="course__date">{props.course.date}</div>
        </div>
    )
};

export default Course;