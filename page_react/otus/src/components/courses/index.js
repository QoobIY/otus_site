import React from 'react'
import './style.scss'
import Course from '../course'

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

export default Courses;