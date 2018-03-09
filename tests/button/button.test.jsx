import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Button from '../../src/button/button.component.jsx'

describe('компонент button', () => {
    let wrapper;
    const value = "Press me",
        dataTid = "start-game",
        onClick = jest.fn();

    Enzyme.configure({adapter: new Adapter()});

    wrapper = shallow(<Button value={value}
                              onButtonClick={onClick}
                              dataTid={dataTid}/>);

    it('рендерит себя', () => {
        expect(wrapper.find('.button').length).toEqual(1);
        expect(wrapper.find('.button').prop('value')).toEqual(value);
        expect(wrapper.find('.button').prop('data-tid')).toEqual(dataTid);
        expect(wrapper.find('.button').prop('onClick')).toEqual(onClick);
    });

    it('вызывает функцию onClick по клику', () => {
        wrapper.find('.button').simulate('click');
        expect(onClick).toHaveBeenCalled();
    })
});