import React from 'react'
import ProfileInput from './profileInput'
import {get, post} from '../utils'

export default class Profile extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            profile: {
                first_name: null,
                email: null,
                date_of_brith: null
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

    saveValue = ({name, value}, accept) => {
        const data = new FormData();
        data.set(name, value);
        post('/api/edit_profile', data).then(res => {
            if(res.success){
                accept();
            } else {
                alert(res.message);
            }
        });
    };

    render() {
            const {first_name, email, date_of_brith} = this.state.profile;
        return (
            <>
                <div className="content">
                    <div className="content__title"> Профиль</div>
                    {
                        this.state.isLoading ? <div>Загрузка ...</div> :
                            <div className="content__item">
                                <div className="profile">
                                    <div className="profile__avatar"><img src="#" alt=""/></div>
                                    <ProfileInput type='text' value={first_name} name='first_name' label="Имя"
                                                  changeValue={this.changeValue} saveValue={this.saveValue}/>
                                    <ProfileInput type='text' value={email} name='email' label="Почта"
                                                  changeValue={this.changeValue} saveValue={this.saveValue}/>
                                    <ProfileInput type='date' value={date_of_brith} name='date_of_brith' label="Дата рождения"
                                                  changeValue={this.changeValue} saveValue={this.saveValue}/>
                                </div>
                            </div>
                    }
                </div>
            </>
        )
    }

}