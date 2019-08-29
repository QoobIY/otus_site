import React from 'react'
import './style.scss'
import Teacher from '../teacher'

const Teachers = (props) => {
    return (
        <div className="teachers__list">
            {
                props.teachers.map( (teacher, key) => (
                    <Teacher key={key} teacher={teacher}/>
                ))
            }
        </div>
    )
};

export default Teachers;