import React from 'react';
import {shallow} from 'enzyme';

import {SetupPage} from './setup-page';

describe('<SetupPage/>', () => {
  it('Renders without crashing', () => {
    shallow(<SetupPage/>);
  });
});