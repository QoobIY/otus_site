import React from 'react'
import './style.scss'

const Teacher = (props) => {
    return (
        <div className="teacher">
            <div className="teacher__title">
                {props.teacher.name}
            </div>
            <img className="teacher__image" src={props.teacher.image} alt=""/>
            <div className="teacher__description">{props.teacher.position}</div>
        </div>
    )
};

export default Teacher;