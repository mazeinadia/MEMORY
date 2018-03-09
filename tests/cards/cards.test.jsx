import React from 'react'
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Cards from '../../src/cards/cards.component.jsx'
import {List} from 'immutable'

describe('компонент cards', () => {
    Enzyme.configure({adapter: new Adapter()});

    const openedCards = List([]),
        cardPairsRestCount = 0,
        onCardClick = jest.fn(),
        cardRows = List([
            List([
                {
                    rowIndex: 0,
                    cardIndex: 0,
                    cardName: "",
                    flipped: false,
                    guessed: false,
                    onClick: () => {}
                },
                {
                    rowIndex: 0,
                    cardIndex: 1,
                    cardName: "",
                    flipped: false,
                    guessed: false,
                    onClick: () => {}
                }])
        ]);

    const wrapper = mount(<Cards
        cardRows = {cardRows}
        openedCards = {openedCards}
        cardPairsRestCount = {cardPairsRestCount}
        onCardClick = {onCardClick}/>);

    it('рендерит себя и подкомпоненты (строка карт, карта)', () => {
        expect(wrapper.find('.cards').length).toEqual(1);
        expect(wrapper.find('.cards__row').length).toEqual(1);
        expect(wrapper.find('.cards__cell').length).toEqual(2);
    });

    it('вызывает функцию по клику на карту', () => {
        wrapper.find('#img00').simulate('click');
        expect(onCardClick).toHaveBeenCalled();
    })
});