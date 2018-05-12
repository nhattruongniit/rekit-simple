import React from 'react';
import { shallow } from 'enzyme';
import { ThreeComponent } from '../../../src/features/boiling-point';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<ThreeComponent />);
  expect(renderedComponent.find('.boiling-point-three-component').length).toBe(1);
});
