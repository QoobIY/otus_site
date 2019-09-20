import React from 'react'
import {get} from  '../../components/utils'
import Courses from '../courses'

export default class Promo extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            courses: []
        }
    }

    render() {
        const {courses} = this.state;
        return (
            <>
                <div className="content">
                    <div className="content__title">Курсы</div>
                    <div className="content__item">
                        <Courses courses={courses}/>
                    </div>
                </div>
            </>
        )
    }

    componentDidMount() {
        get('/api/courses').then(courses => this.setState({courses}))
    }
}