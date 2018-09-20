import React from 'react';
import {shallow} from 'enzyme';

import TopNav from './top-nav';

describe('<TopNav/>', () => {
  it('Renders without crashing', () => {
    shallow(<TopNav/>);
  });

  it('Renders the Info link initially', () => {
    const wrapper = shallow(<TopNav />);
    console.log(shallow(<TopNav />));
    console.log(wrapper.find('a'));
    expect(wrapper.find('a')).to.have.property('href', '#info');
    
    
    // expect(wrapper.props().href).to.have.property('href', '#info');
    // expect(wrapper.find('#foo')).to.have.lengthOf(1);
    // expect(wrapper.props().includedProp).to.equal('Success!');
    // expect(shallow(<Form />)).props()).to.have.property('method', 'post');
  });

});