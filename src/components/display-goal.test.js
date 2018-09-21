import React from 'react';
import {shallow} from 'enzyme';

import {DisplayGoal} from './display-goal';

describe('<DisplayGoal />', () => {
  it('Renders without crashing', () => {
  shallow(<DisplayGoal currentUser={{ dailyGoal: '', dailyProgress: [] }} />);
  });
});
