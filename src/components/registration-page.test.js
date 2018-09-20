import React from 'react';
import {shallow} from 'enzyme';

import {RegistrationPage} from './registration-page';

describe(<RegistrationPage />, () => {
  it('Renders without crashing', () => {
    shallow(<RegistrationPage/>);
  });

  it('Renders the login link', () => {
    const wrapper = shallow(<Login/>);
    expect(wrapper.hasClass('home')).toEqual(true);
  })

});