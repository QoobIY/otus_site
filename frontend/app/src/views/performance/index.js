import React from 'react';
import {get} from "../../components/utils";
import Marks from '../../components/marks/studentMark';
import TeacherMarks from '../../components/marks/teacherMarks';

export default class Promo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isTeacher: false,
            marks: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        get('/api/marks').then(({isTeacher, marks}) => this.setState({isTeacher, marks, isLoaded: true}));
    }

    render() {
        const {isLoaded, isTeacher, marks} = this.state;
        console.log(this.state);
        return (
            <div className="content">
                {isLoaded ?
                    (isTeacher ?
                            <TeacherMarks marks={marks}/> : <Marks marks={marks}/>
                    ):
                    <div>Загрузка</div>
                }
            </div>
        )
    }
}