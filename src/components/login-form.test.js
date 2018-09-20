import React from 'react';
import {shallow} from 'enzyme';

import {LoginForm} from './login-form';

describe('<LoginForm/>', () => {
  it('Renders without crashing', () => {
    shallow(<LoginForm handleSubmit = {() => {}} />);
  });

  it('Renders the log in button', () => {
    const wrapper = shallow(<LoginForm handleSubmit = {() => {}}/>);
    expect(wrapper.hasClass('login-form')).toEqual(true);
  });

}); 
