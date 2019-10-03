import React from 'react';
import renderer from 'react-test-renderer';
import Courses from '../courses';

test('test Course component', () => {
    const coursesComponent = renderer.create(
        <Courses courses={[
            {name: 'TestCourse', description: 'Test Description', date: '21.08.1972', },
            {name: 'TestCourse1', description: 'Test Description', date: '22.08.1972', },
            {name: 'TestCourse2', description: 'Test Description', date: '23.08.1972', classes: 'dark'},
        ]}/>
    );
    const coursesJSON = coursesComponent.toJSON();
    expect(coursesJSON).toMatchSnapshot();
});
