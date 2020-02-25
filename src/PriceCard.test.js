import React from 'react';
import { render } from '@testing-library/react';
import { configure } from 'enzyme';
import PriceCard from './PriceCard';
import Adapter from 'enzyme-adapter-react-16';

beforeAll(() => configure({ adapter: new Adapter() }));

describe('price card component template', () => {
  let wrapper;
  const mockProps = {
    title: 'Basic',
    price: 29.99,
    features: ['500 GB Storage', '2 Users Allowed', 'Send up to 3 GB']
  };

  beforeEach(() => (wrapper = render(<PriceCard {...mockProps} />)));

  it('renders price label', () => {
    const { getByText } = wrapper;
    const priceElement = getByText(/29.99/i);
    expect(priceElement).toBeInTheDocument();
  });

  it('renders feature elements', () => {
    const matches = mockProps.features.map(f =>
      wrapper.getByText(new RegExp(f, 'i'))
    );
    expect(matches.length).toBe(mockProps.features.length);
  });

  it('renders learn more button', () => {
    const {getByText } = wrapper;
    const button = getByText('Learn more');
    expect(button).toBeInTheDocument();
  });

});
