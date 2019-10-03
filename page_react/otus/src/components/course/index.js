import React from 'react'
import './style.scss'
import T from 'prop-types';

const Course = ({course: { classes, name, description, date}}) => {
    return (
        <div className={"course " + classes}>
            <div className="course__title">
                {name}
            </div>
            <div className="course__description">
                {description}
            </div>
            <div className="course__date">{date}</div>
        </div>
    )
};

Course.propTypes = {
    course: T.shape({
        name: T.string.isRequired,
        description: T.string.isRequired,
        date: T.string,
        classes: T.string,
    })
};
export default Course;