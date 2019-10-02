import React from 'react'
import './style.scss'
import Teacher from '../teacher'
import T from "prop-types";

const Teachers = ({teachers}) => {
    return (
        <div className="teachers__list">
            {
                teachers.map( (teacher, key) => (
                    <Teacher key={key} teacher={teacher}/>
                ))
            }
        </div>
    )
};

Teachers.propTypes = {
    teachers: T.array
};
export default Teachers;