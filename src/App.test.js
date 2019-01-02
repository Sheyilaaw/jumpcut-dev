import React from 'react';
import { shallow, configure } from  'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Sequencer from "./components/Sequencer/Sequencer";
configure({adapter: new Adapter()});

describe('<App />', () =>{
    it('renders 1 <Sequencer /> component', () => {
        const component = shallow(<Sequencer />);
        expect(component).toHaveLength(1);
    });
});
