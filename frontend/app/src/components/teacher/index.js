import React from 'react';
import './style.scss';
import T from 'prop-types';

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
    teacher: T.shape({
        image: T.string.isRequired,
        position: T.string.isRequired,
        name: T.string.isRequired
    })
};
export default Teacher;