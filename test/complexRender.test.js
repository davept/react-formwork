import React from 'react';
import ComplexForm from './forms/complexForm';
import renderer from 'react-test-renderer';

test('Test a simple render', () => {
    const component = renderer.create(
        <ComplexForm />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
