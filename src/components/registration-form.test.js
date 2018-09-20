import React from 'react';
import {shallow} from 'enzyme';

import {RegistrationForm} from './registration-form';

describe('<RegistrationForm', () => {
  it('Renders without crashing', () => {
    shallow(<RegistrationForm handleSubmit = {() => {}} />);
  });

  it('Renders the submit button', () => {
    const wrapper = shallow(<RegistrationForm handleSubmit = {() => {}}/>);
    expect(wrapper.hasClass('login-form')).toEqual(true);
  });

});
