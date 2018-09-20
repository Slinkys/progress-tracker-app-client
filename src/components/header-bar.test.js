import React from 'react';
import {shallow} from 'enzyme';

import {HeaderBar} from './header-bar';

describe('<HeaderBar/>', () => {
  it('Renders without crashing', () => {
    shallow(<HeaderBar/>);
  });

  it('Renders log out button', () => {
    const wrapper = shallow(<HeaderBar handleSubmit = {() => {}}/>);
    expect(wrapper.hasClass('header-bar')).toEqual(true);
  })

}); 

