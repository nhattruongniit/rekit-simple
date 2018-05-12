import React from 'react';
import { shallow } from 'enzyme';
import { OneComponent } from '../../../src/features/boiling-point';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<OneComponent />);
  expect(renderedComponent.find('.boiling-point-one-component').length).toBe(1);
});
