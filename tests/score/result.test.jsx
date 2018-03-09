import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Result from '../../src/score/result.component.jsx'

describe('компонент result', () => {
    const score = 0;

    Enzyme.configure({adapter: new Adapter()});

    const wrapper = shallow(<Result score={score}/>);

    it('рендерит себя', () => {
        expect(wrapper.find('.text_end-title').length).toEqual(1);
    })
});