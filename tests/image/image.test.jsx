import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Image from '../../src/image/image.component.jsx'

describe('компонент image', () => {
    const pageNameStart = "start";
    const pageNameEnd = "end";

    Enzyme.configure({adapter: new Adapter()});

    it('рендерит себя', () => {
        const wrapper = shallow(<Image pageName={pageNameStart}/>);
        expect(wrapper.find('.image').length).toEqual(1);
    });

    it('рендерит стартовую картинку', () => {
        const wrapper = shallow(<Image pageName={pageNameStart}/>);
        expect(wrapper.find('.image__start').prop('src')).toEqual("./asserts/StartGame.png");
        expect(wrapper.find('.image__start').prop('alt')).toEqual("Добро пожаловать!");
    });

    it('рендерит картинку окончания игры', () => {
        const wrapper = shallow(<Image pageName={pageNameEnd}/>);
        expect(wrapper.find('.image__end').prop('src')).toEqual("./asserts/Group2.png");
        expect(wrapper.find('.image__end').prop('alt')).toEqual("Всего доброго!");
    });
});