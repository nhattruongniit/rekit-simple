import React from 'react';
import { shallow } from 'enzyme';
import { FourComponent } from '../../../src/features/boiling-point';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<FourComponent />);
  expect(renderedComponent.find('.boiling-point-four-component').length).toBe(1);
});
