import React from 'react';
import Sequencer from './Sequencer';
import { shallow, configure } from  'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

describe('<Seqeuncer />', () => {

    it('matches the snapshot', () => {
        const tree = shallow(<Sequencer />);
        expect(tree).toMatchSnapshot();
    });

    it('shows six buttons', () => {
       const wrapper = shallow(<Sequencer />);
       const numberOfBtns = wrapper.find('button');
       expect(numberOfBtns).toHaveLength(6);
    });

    it('can show factorial sequence when the button is clicked', () => {
        const wrapper = shallow(<Sequencer />);
        const factorialButton = wrapper.find('button#factorial');
        factorialButton.simulate('click', { target: { id: 'factorial' } });
        wrapper.update();
        const liItem = wrapper.find('ul.factorial-list>li');
        expect(liItem).toHaveLength(1);
    });

    it('can show fibonacci sequence when the button is clicked', () => {
        const wrapper = shallow(<Sequencer />);
        const factorialButton = wrapper.find('button#fibonacci');
        factorialButton.simulate('click', { target: { id: 'fibonacci' } });
        wrapper.update();
        const liItem = wrapper.find('ul.fibonacci-list>li');
        expect(liItem).toHaveLength(1);
    });

});
