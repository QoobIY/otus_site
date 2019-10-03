import React from 'react';
import renderer from 'react-test-renderer';
import {shallow, mount} from 'enzyme';
import Login from './loginForm';
import Register from './registerForm';
import RegisterFooter from './registerFooter';

describe('loginForm test', () => {
    test('loginSnapshot', () => {
        const component = renderer.create(
            <Login />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});





describe('registerForm test', () => {
    const showLogin = jest.fn();

    test('registerSnapshot', () => {
        const component = renderer.create(
            <Register showLogin={showLogin}/>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('registerSend', () => {
        const component = mount(<Register showLogin={showLogin}/>);
        const spy = jest.fn();
        component.instance().register = spy;
        component.instance().forceUpdate();

        component.find('.form').simulate('submit');
        expect(spy).toHaveBeenCalledTimes(1);

    });

});


describe('register footer test', () => {
    const mock = jest.fn();
    test('correct show auth', ()=> {
        const component = shallow(<RegisterFooter showLogin={mock} showRegister={mock} show={'register'}/>);
        expect(component.text()).toEqual('Авторизация')
    });
    test('correct show register', ()=> {
        const component = shallow(<RegisterFooter showLogin={mock} showRegister={mock} show={'auth'}/>);
        expect(component.text()).toEqual('Впервые на сайте?')
    });
});