import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/boiling-point/DefaultPage';

describe('boiling-point/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      boilingPoint: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.boiling-point-default-page').length
    ).toBe(1);
  });
});
