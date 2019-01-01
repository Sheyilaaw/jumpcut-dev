import React from 'react';
import App from './App';
import { shallow, configure } from  'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

describe('<App />', () =>{
  test('Rendering a simple component',() => {
      const wrapper = shallow(<App />);
      expect(wrapper).toMatchSnapshot();
  });
});
