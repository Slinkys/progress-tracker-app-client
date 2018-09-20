import React from 'react';
import {shallow} from 'enzyme';
// import {mount} from 'enzyme';

import {Dashboard} from './dashboard'; 
// import {Dashboard} from './dashboard'; NO, only test connected version and can use full dom rendering 

describe('<Dashboard />', () => {
  it('Renders without crashing', () => {
  shallow(<Dashboard dispatch = {() => {}} />);
  });

  // it('Should return current user', () => {
  //   const wrapper = mount(<Dashboard dispatch = {() => {}} />);
  // });

  // it('Should fire the onSubmit callback when the form is submitted', () => {
  //   const callback = jest.fn();
  //   const wrapper = mount(<Dashboard onSubmit={callback} />);
  //   const value = '';
  //   wrapper.instance().setEditing(true);
  //   wrapper.update();
  //   wrapper.find('input[type="text"]').instance().value = value;
  //   wrapper.simulate('submit');
  //   expect(callback).toHaveBeenCalledWith(value);
  // });

});