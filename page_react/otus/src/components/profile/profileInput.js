import React from 'react';
import T from 'prop-types';
import './style.scss';

export default class ProfileInput extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            edit: false,
            editText: 'EDIT'
        }
    }

    editField = () => {
        const editText = this.state.editText === 'EDIT' ? 'SAVE' : 'EDIT';
        if(this.state.edit){
            const accept = () => {
                this.setState({
                    edit: false,
                    editText
                })
            };
            this.props.saveValue(this.props, accept);
            return;
        }
        this.setState({
            edit: !this.state.edit,
            editText
        })
    };


    render() {
        const {edit, editText} = this.state,
        {name, type, value, label, changeValue} = this.props;
        return (
            <div className="editable">
                <label className="editable__label">{label}: </label>
                <input className="editable__input" disabled={!edit} name={name} type={type} defaultValue={value || undefined} onChange={changeValue}/>
                <button className="editable__button" onClick={this.editField}>{editText}</button>
            </div>
        )
    }

}

ProfileInput.propTypes = {
    type: T.string.isRequired,
    value: T.oneOfType([
        T.string,
        T.number,
    ]),
    name: T.string,
    label: T.string.isRequired,
    changeValue: T.func.isRequired,
    saveValue: T.func.isRequired
};