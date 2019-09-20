import React from 'react';
import './style.scss'
import PropTypes from 'prop-types'

export default class TeacherMarks extends React.Component {

    render() {
        const {marks} = this.props;


        return (
            <table className="marks-table">
                <thead>
                    <tr className='marks-table__tr marks-table__thead-tr'>
                        <th>Студент</th>
                        <th>Оценка</th>
                        <th>Действия</th>
                    </tr>
                </thead>
                <tbody>
                {
                    marks.map( ({mark, student}, key) =>
                        <tr className='marks-table__tr marks-table__tbody-tr' key={key}>
                            <td>{student}</td>
                            <td>{mark}</td>
                            <td>
                                <button className="marks-table__button">Удалить</button>
                                <button className="marks-table__button" disabled>Редактировать</button>
                            </td>
                        </tr>)
                }
                </tbody>
            </table>
        );
    }
}

TeacherMarks.propTypes  = {
    marks: PropTypes.array.isRequired
};