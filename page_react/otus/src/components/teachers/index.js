import React from 'react'
import './style.scss'
import Teacher from '../teacher'
import PropTypes from "prop-types";

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
    teachers: PropTypes.array
};
export default Teachers;