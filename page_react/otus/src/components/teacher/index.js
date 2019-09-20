import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

const Teacher = ({teacher}) => {
    return (
        <div className="teacher">
            <div className="teacher__title">
                {teacher.name}
            </div>
            <img className="teacher__image" src={teacher.image} alt=""/>
            <div className="teacher__description">{teacher.position}</div>
        </div>
    )
};

Teacher.propTypes = {
    teacher: PropTypes.shape({
        image: PropTypes.string.isRequired,
        position: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    })
};
export default Teacher;