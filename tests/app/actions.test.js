import * as actions from '../../src/app/actions'
import {getCardRows} from '../../src/cards/cards.service'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {List} from 'immutable'

describe('actions', () => {
    it('создает действие - открытие карты', () => {
        const rowIndex = 0,
            cardIndex = 0;
        const expectedAction = {
            type: actions.OPEN_CARD,
            rowIndex,
            cardIndex
        };
        expect(actions.openCard(rowIndex, cardIndex)).toEqual(expectedAction)
    });

    it('создает действие - закрытие или удаление карты', () => {
        const rowIndex = 0,
            cardIndex = 0;
        const expectedAction = {
            type: actions.CLOSE_OR_DELETE_CARD,
            rowIndex,
            cardIndex
        };
        expect(actions.closeOrDeleteCard(rowIndex, cardIndex)).toEqual(expectedAction)
    });

    it('создает действие - открытие всех карт', () => {
        const cardRows = getCardRows();
        const expectedAction = {
            type: actions.SHOW_CARDS,
            cardRows
        };
        expect(actions.showCards(cardRows)).toEqual(expectedAction)
    });

    it('создает действие - закрытие всех карт', () => {
        const expectedAction = {
            type: actions.HIDE_CARDS
        };
        expect(actions.hideCards()).toEqual(expectedAction)
    });

    it('создает действие - загрузка стартовой страницы игры', () => {
        const expectedAction = {
            type: actions.LOAD_START_PAGE
        };
        expect(actions.loadStartPage()).toEqual(expectedAction)
    });

    it('создает действие - проверка окончания игры -> окончание игры', () => {
        const expectedAction = {
            type: actions.END_GAME
        };
        expect(actions.endGame()).toEqual(expectedAction)
    })
});

const thunks = [thunk];
const mockStore = configureMockStore(thunks);
describe('thunks', () => {
    it ('закрывает или удаляет карту после открытия', () => {
        const rowIndex = 0,
            cardIndex = 0,
            openedCards = List([{rowIndex: 0, cardIndex: 1, cardName: "8D"}]),
            cardPairsRestCount = 5;
        const expectedActions = [
            {type: actions.OPEN_CARD, rowIndex, cardIndex},
            {type: actions.CLOSE_OR_DELETE_CARD,rowIndex, cardIndex}
        ];
        const store = mockStore ({
            cardRows: List([
                {rowIndex: 0, cardIndex: 0, cardName: "7D"},
                {rowIndex: 0, cardIndex: 1, cardName: "8D"}
            ]),
            score: 0,
            cardPairsRestCount: 5,
            openedCards:  List([{rowIndex: 0, cardIndex: 1, cardName: "8D"}])
        });
        return store.dispatch(actions.cardClick(
            rowIndex, cardIndex, openedCards, cardPairsRestCount
        )).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        });
    });

    it ('закрывает или удаляет карту после открытия и проверяет окончена ли игра', () => {
        const rowIndex = 0,
            cardIndex = 0,
            openedCards = List([{rowIndex: 0, cardIndex: 1, cardName: "8D"}]),
            cardPairsRestCount = 1;
        const expectedActions = [
            {type: actions.OPEN_CARD, rowIndex, cardIndex},
            {type: actions.CLOSE_OR_DELETE_CARD,rowIndex, cardIndex},
            {type: actions.END_GAME}
        ];
        const store = mockStore ({
            cardRows: List([
                {rowIndex: 0, cardIndex: 0, cardName: "8D"},
                {rowIndex: 0, cardIndex: 1, cardName: "8D"}
            ]),
            score: 0,
            cardPairsRestCount: 1,
            openedCards:  List([{rowIndex: 0, cardIndex: 1, cardName: "8D"}])
        });
        return store.dispatch(actions.cardClick(
            rowIndex, cardIndex, openedCards, cardPairsRestCount
        )).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        });
    });

    it ('показывает все карты и закрывает после', () => {
        const store = mockStore ({});
        jest.setTimeout(10000);
        return store.dispatch(actions.startGame()).then(() => {

            const storeGetActions = store.getActions();
            const cardRows = storeGetActions[0].cardRows;
            const expectedActions = [
                {type: actions.SHOW_CARDS, cardRows},
                {type: actions.HIDE_CARDS}
            ];

            expect(storeGetActions).toEqual(expectedActions)
        });
    });
});