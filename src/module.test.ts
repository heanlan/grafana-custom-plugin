import React from 'react';
import SankeyPanel from './SankeyPanel';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Sankey Diagram test', () => {
  it('should return true', () => {
    expect(true).toBeTruthy();
  });
  it('should render Chart component', () => {
    const component = mount(SankeyPanel);
  });
});
