import React from 'react';
import './style.scss';
import T from 'prop-types';

const Marks = ({marks}) => {
    return (
        <div className="marks">
            {
                marks.map( ({lesson, teacher, mark }, key) =>
                    <div key={key} className="mark">
                        <div className="mark__title">{lesson}</div>
                        <div className="mark__teacher"><span>Преподаватель:</span> {teacher}</div>
                        <div className={"mark__mark mark__mark--"+mark}>{mark}</div>
                    </div>)
            }
        </div>
    )
};

Marks.propTypes = {
    marks: T.array
};

export default Marks;