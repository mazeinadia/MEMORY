import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Restart from '../../src/restart/restart.component.jsx'

describe('компонент restart', () => {
    const onRestartClick = jest.fn();

    Enzyme.configure({adapter: new Adapter()});

    const wrapper = shallow(<Restart onRestartClick={onRestartClick}/>);

    it('рендерит себя', () => {
        expect(wrapper.find('.text__back').length).toEqual(1);
        expect(wrapper.find('.text__back').prop('onClick')).toEqual(onRestartClick);
    });

    it('вызывает функцию onRestartClick по клику', () => {
        wrapper.find('.text__back').simulate('click');
        expect(onRestartClick).toHaveBeenCalled();
    })
});