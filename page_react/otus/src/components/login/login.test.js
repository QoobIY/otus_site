import React from 'react';
import renderer from 'react-test-renderer';
import {shallow, mount, configure} from 'enzyme';
import Login from './loginForm';
import Register from './registerForm';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
//
// describe('loginForm test', () => {
//     test('loginSnapshot', () => {
//         const component = renderer.create(
//             <Login />
//         );
//         const tree = component.toJSON();
//         expect(tree).toMatchSnapshot();
//     });
// });



class Appx extends React.Component {
    constructor(...args) {
        super(...args);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick(event) {
        const x = event.target,y = this;
        return x === y;
    }

    handleAnchorClick = (event) => {
        const x = event.target,y = this;
        return x === y;
    };

    render() {
        return (
            <div>
                <button onClick={this.handleButtonClick}>Click Me!</button>
                <a href="#" onClick={this.handleAnchorClick}>Click Me!</a>
            </div>
        );
    }
}


describe('spy using instance with mount', () => {
    it('calls "handleAnchorClick()" on button click', () => {
        const wrapper = mount(<Appx />);
        const spy = jest.spyOn(wrapper.instance(), 'handleAnchorClick');
        wrapper.update();
        wrapper.find('a').simulate('click');
        expect(spy).toHaveBeenCalled();
    });
});
//
// describe('registerForm test', () => {
//     const showLogin = jest.fn();
//
//     test('registerSnapshot', () => {
//         const component = renderer.create(
//             <Register showLogin={showLogin}/>
//         );
//         const tree = component.toJSON();
//         expect(tree).toMatchSnapshot();
//     });
//
//     test('registerSend', () => {
//         const component = mount(<Register showLogin={showLogin}/>);
//         const spy = jest.spyOn(component.instance(), 'register');
//         component.update();
//         component.find('.form').simulate('submit');
//         expect(spy).toHaveBeenCalledTimes(1);
//
//     });
//
// });