import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Score from '../../src/score/score.component.jsx'

describe('компонент score', () => {
    const value = 0;

    Enzyme.configure({adapter: new Adapter()});

    const wrapper = shallow(<Score value={value}/>);

    it('рендерит себя', () => {
        expect(wrapper.find('.text__score').length).toEqual(1);
    });
});