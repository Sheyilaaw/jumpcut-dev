import React from 'react';
import Sequencer from './Sequencer';
import { shallow, configure } from  'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

describe('<Seqeuncer />', () => {

    it('shows six buttons', () => {
       const wrapper = shallow(<Sequencer />);
       const numberOfBtns = wrapper.find('button');
       expect(numberOfBtns).toHaveLength(6);
    });

    it('can show factorial sequence when the button is clicked', () => {
        const wrapper = shallow(<Sequencer />);
        const factorialButton = wrapper.find('button#factorial');
        factorialButton.simulate('click', {
            stopPropagation: () => {},
            target: { id: 'factorial' }
        });
        wrapper.update();
        const liItem = wrapper.find('ul.factorial-list>li');
        expect(liItem).toHaveLength(1);
    });

    it('can show fibonacci sequence when the button is clicked', () => {
        const wrapper = shallow(<Sequencer />);
        const factorialButton = wrapper.find('button#fibonacci');
        factorialButton.simulate('click', {
            stopPropagation: () => {},
            target: { id: 'fibonacci' }
        });
        wrapper.update();
        const liItem = wrapper.find('ul.fibonacci-list>li');
        expect(liItem).toHaveLength(1);
    });

    it('can show range sequence when the button is clicked', () => {
        const wrapper = shallow(<Sequencer />);
        const factorialButton = wrapper.find('button#range');
        //Fill input field for range
        const startField = wrapper.find('input#start');
        const stepField = wrapper.find('input#step');
        startField.simulate('change', { target: { value: '1' } });
        stepField.simulate('change', { target: { value: '3' } });

        factorialButton.simulate('click', {
            stopPropagation: () => {},
            target: { id: 'range' }
        });
        wrapper.update();
        const liItem = wrapper.find('ul.range-list>li');
        expect(liItem).toHaveLength(1);
    });

    it('can show prime sequence when the button is clicked', () => {
        const wrapper = shallow(<Sequencer />);
        const factorialButton = wrapper.find('button#prime');

        factorialButton.simulate('click', {
            stopPropagation: () => {},
            target: { id: 'prime' }
        });
        wrapper.update();
        const liItem = wrapper.find('ul.prime-list>li');
        expect(liItem).toHaveLength(1);
    });

    it('can show partial sequence when the button is clicked', () => {
        const wrapper = shallow(<Sequencer />);
        const factorialButton = wrapper.find('button#partial');
        //Fill input field for range
        const partialField = wrapper.find('input#partial-values');
        partialField.simulate('change', { target: { value: '1 3 7 2 0' } });

        factorialButton.simulate('click', {
            stopPropagation: () => {},
            target: { id: 'partial' }
        });
        wrapper.update();
        const liItem = wrapper.find('ul.partial-list>li');
        expect(liItem).toHaveLength(1);
    });

    it('can show piped sequence when the button is clicked', () => {
        const wrapper = shallow(<Sequencer />);
        const pipedButton = wrapper.find('button#piped');
        const selectInput = wrapper.find('select#piped-options');
        selectInput.simulate('change', { target: { value: 'factorial' } });

        pipedButton.simulate('click', {
            stopPropagation: () => {},
            target: { id: 'piped' }
        });
        wrapper.update();
        const liItem = wrapper.find('ul.piped-list>li');
        expect(liItem).toHaveLength(1);
    });

});
