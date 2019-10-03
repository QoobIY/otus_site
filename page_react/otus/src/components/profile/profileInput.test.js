import React from 'react';
import renderer from 'react-test-renderer';
import ProfileInput from "./profileInput";
import {shallow} from "enzyme";

describe('profileInput Test', () => {
    test('profileInput snapshot', () => {
        const mock = jest.fn();
        const component = renderer.create(
            <ProfileInput changeValue={mock} label={'Test Label'} saveValue={mock} type={'text'}/>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('profileInput correct label', () => {
        const mock = jest.fn(),
            label = 'This is my label';
        const component = shallow(<ProfileInput changeValue={mock} label={label} saveValue={mock} type={'text'}/>);
        expect(component.contains(<label  className="editable__label">{label}: </label>)).toEqual(true);
    });

    test('profileInput correct change value', () => {
        const mock = jest.fn(),
            label = 'This is my label';
        const component = shallow(<ProfileInput changeValue={mock} label={label} saveValue={mock} type={'text'}/>);
        component.find('.editable__input').simulate('change');
        expect(mock).toBeCalled();
    });

    test('profileInput correct save value', () => {
        const mock = jest.fn(),
            mockSave = jest.fn(),
            label = 'This is my label';
        const component = shallow(<ProfileInput changeValue={mock} label={label} saveValue={mockSave} type={'text'}/>);
        component.find('.editable__button').simulate('click');
        component.find('.editable__button').simulate('click');
        expect(mockSave).toBeCalledTimes(1);
    });
});
