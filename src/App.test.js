import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Card from './Card';

describe('App', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<App />));

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should have a root element', () => {
    expect(wrapper.find('div.app').length).toEqual(1);
  });

  it('should render card correctly', () => {
    const selected = { Title: 'My test', Year: '2021', Poster: 'test' };

    const component = shallow(<Card selected={selected} />);
    expect(component).toMatchSnapshot();
  });
});