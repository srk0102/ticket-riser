import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { CustomButton } from './customButton';

Enzyme.configure({adapter: new Adapter() });

describe('CustomButton', () => {
  it('should show text', () => {
    const wrapper = shallow(<CustomButton/>);
    const text = wrapper.find('div div');
    expect(text.text()).toBe('customButton component works')
  })
})