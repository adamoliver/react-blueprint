import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Img from './';

Enzyme.configure({ adapter: new Adapter() });

let component;

describe('Img', () => {
    beforeEach(() => {
        component = shallow(<Img />);
    });

    test('should render an image', () => {
        expect(component.type()).toEqual('foo');
    });
});
