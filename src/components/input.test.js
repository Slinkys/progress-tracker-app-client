import React from 'react';
// import {shallow} from 'enzyme';
import {mount} from 'enzyme';

import Input from './input';

describe('<Input/>', () => {
  it('Renders without crashing', () => {
    const wrapper = mount(<Input meta={{ touched: false }} input={{ name: '' }}/>);
  });


}); 

//shallow(<Input meta={{ touched: false }} input={{ name: '' }} />);

// describe('<DisplayGoal />', () => {
//   it('Renders without crashing', () => {
//   const wrapper = mount(<DisplayGoal />);
//   });


// });