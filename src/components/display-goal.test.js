import React from 'react';
import {shallow} from 'enzyme';

import {DisplayGoal} from './display-goal';

describe('<DisplayGoal />', () => {
  it('Renders without crashing', () => {
  shallow(<DisplayGoal currentUser={{ dailyGoal: '', dailyProgress: [] }} />);
  });

  // it('Should return the dailyProgress array', () => {
  //   const dailyProgress = ['dailyGoal1', 'dailyGoal2', 'dailyGoal3'];
  //   const wrapper = shallow(<DisplayGoal currentUser={{ dailyGoal: '', dailyProgress: [] }} />);
  //   wrapper.setState({
  //     dailyProgress
  //   });

  //   const li1s = wrapper.find('.display-goal');
  //   console.log(li1s.debug());

  // });

});
