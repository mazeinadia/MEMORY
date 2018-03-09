import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Content from '../../src/content/content.component.jsx'

describe('компонент content', () => {
    const pageName = "start",
        dataTid = "tid",
        children = [<h1 className="child" key="h1">Hello</h1>];

    Enzyme.configure({adapter: new Adapter()});

    const wrapper = shallow(<Content pageName={pageName}
                              children={children}
                              dataTid={dataTid}/>);

    it('рендерит себя и подкомпоненты (children)', () => {
        expect(wrapper.find('.content__' + pageName).length).toEqual(1);
        expect(wrapper.find('.content').prop('data-tid')).toEqual(dataTid);
        expect(wrapper.find('h1').prop('className')).toEqual('child');

    })
});