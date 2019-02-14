import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

it('does not crash', () => {
    const component = renderer.create(<App />);
    expect(component).toBeTruthy();
});
