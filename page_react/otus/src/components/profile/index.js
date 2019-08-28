import React from 'react'
import ProfileInput from './profileInput'
import {get} from '../utils'

export default class Profile extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            profile: {
                name: null,
                email: null
            }
        }
    }

    componentDidMount() {
        get('/api/profile').then( profile => this.setState({profile, isLoading: false}))
    }

    changeValue = (ev) => {
        const {profile} = this.state,
            {name, value} = ev.target;
        profile[name] = value;
        this.setState({profile});
    };

    saveValue = (props) => {
        console.log(props)
    };

    render() {
            const {name, email} = this.state.profile;
        return (
            <>
                <div className="content">
                    <div className="content__title"> Профиль</div>
                    {
                        this.state.isLoading ? <div>Загрузка ...</div> :
                            <div className="content__item">
                                <div className="profile">
                                    <div className="profile__avatar"><img src="#" alt=""/></div>
                                    <ProfileInput type='text' value={name} name='name' label="Имя"
                                                  changeValue={this.changeValue} saveValue={this.saveValue}/>
                                    <ProfileInput type='text' value={email} name='email' label="Почта"
                                                  changeValue={this.changeValue} saveValue={this.saveValue}/>
                                </div>
                            </div>
                    }
                </div>
            </>
        )
    }

}