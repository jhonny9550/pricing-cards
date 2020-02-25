import React from 'react';
import { render } from '@testing-library/react';
import { configure, shallow } from 'enzyme';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';

beforeAll(() => configure({ adapter: new Adapter() }));

describe('app component template', () => {
  it('renders page title', () => {
    const { getByText } = render(<App />);
    const titleElement = getByText(/Our Pricing/i);
    expect(titleElement).toBeInTheDocument();
  });
});

describe('app component setup', () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<App />)));

  it('have switch component mounted', () => {
    const switchComponent = wrapper.find('Switch');
    expect(switchComponent.length).toBe(1);
  });

  it('have 3 PriceCard components mounted', () => {
    const priceComponent = wrapper.find('PriceCard');
    expect(priceComponent.length).toBe(3);
  });

});
