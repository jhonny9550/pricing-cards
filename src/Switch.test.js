import React from 'react';
import { render } from '@testing-library/react';
import { configure } from 'enzyme';
import Switch from './Switch';
import Adapter from 'enzyme-adapter-react-16';

beforeAll(() => configure({ adapter: new Adapter() }));

describe('switch component template', () => {
  let wrapper;

  const mockProps = {
    labels: ['Anually', 'Monthly']
  };

  beforeEach(() => (wrapper = render(<Switch {...mockProps} />)));

  it('renders label values', () => {
    const matches = mockProps.labels.map(l => 
      wrapper.getByText(new RegExp(l, 'i'))
    );
    expect(matches.length).toBe(mockProps.labels.length);
  });

});
