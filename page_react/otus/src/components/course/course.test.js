import React from 'react';
import renderer from 'react-test-renderer';
import Course from '../course';

test('test Course component', () => {
    const courseComponent = renderer.create(
        <Course course={{name: 'TestCourse', description: 'Test Description', date: '21.08.1972', }}/>
    );
    const courseJSON = courseComponent.toJSON();
    expect(courseJSON).toMatchSnapshot();
});
