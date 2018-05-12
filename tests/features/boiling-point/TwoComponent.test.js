import React from 'react';
import { shallow } from 'enzyme';
import { TwoComponent } from '../../../src/features/boiling-point';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<TwoComponent />);
  expect(renderedComponent.find('.boiling-point-two-component').length).toBe(1);
});
