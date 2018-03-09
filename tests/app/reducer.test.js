import reducer from '../../src/app/reducer'
import * as actions from '../../src/app/actions'
import React from 'react';
import ButtonContainer from "../../src/button/button.container.jsx"
import ImageContainer from '../../src/image/image.container.jsx'
import Result from '../../src/score/result.component.jsx'
import RestartContainer from '../../src/restart/restart.container.jsx'
import ScoreContainer from '../../src/score/score.container.jsx'
import CardsContainer from '../../src/cards/cards.container.jsx'
import {List} from "immutable"
import {
    COLUMN_COUNT,
    ROW_COUNT
} from "../../src/globals"

describe('MEMORY reducer', () =>
{
    it('возвращает инициальное состояние', () => {
        expect(reducer(undefined, {})).toEqual({})
    });

    it('возвращает состояние стартовой станицы', () => {
        expect(
            reducer({}, {type: actions.LOAD_START_PAGE})
        ).toEqual({
            pageName: "start",
            children: [
                <ImageContainer key="img-start"/>,
                <h1 className='text text_start-title'>MEMORY GAME</h1>,
                <ButtonContainer value="Начать игру" dataTid="NewGame-startGame" key="button-start"/>
            ],
            cardRows: [],
            score: 0,
            cardPairsRestCount: 9,
            openedCards: []
        })
    });

    it('возвращает состояние страницы окончания игры', () => {
        expect(
            reducer({
                cardPairsRestCount: 0,
                score: 0
            }, {type: actions.END_GAME})
        ).toEqual({
            pageName: "end",
            children: [
                <ImageContainer key="img-end"/>,
                <div className='text text_end-title'>
                    <span>Поздравляем!</span>
                    <br/>
                    <Result score={0} key="result-score"/>
                </div>,
                <ButtonContainer value="Еще раз" dataTid="EndGame-retryGame" key="button-again"/>
            ],
            cardRows: List([]),
            score: 0,
            cardPairsRestCount: 0,
            openedCards: List([])
        })
    });

    it('возвращает предыдущее состояние', () => {
        expect(
            reducer({
                cardPairsRestCount: 1
            }, {type: actions.END_GAME})
        ).toEqual({
            cardPairsRestCount: 1
        })
    });

    it('возвращает состояние с открытой картой', () => {
        const rowIndex = 0,
            cardIndex = 0;

        expect(
            reducer({
                cardRows: List([List([{rowIndex: 0, cardIndex: 0, flipped: true}])]),
                openedCards: List([])
            }, {type: actions.OPEN_CARD, rowIndex, cardIndex})
        ).toEqual({
            cardRows: List([List([{rowIndex: 0, cardIndex: 0, flipped: false}])]),
            openedCards: List([{rowIndex: 0, cardIndex: 0, flipped: true}])
        })
    });

    it('возвращает состояние с 2мя закрытыми картами', () => {
        const rowIndex = 0,
            cardIndex = 0;

        expect(
            reducer({
                cardRows: List([List([{rowIndex: 0, cardIndex: 0,cardName: "7D", flipped: false},
                    {rowIndex: 0, cardIndex: 1, cardName: "8D", flipped: false}])]),
                openedCards: List([{rowIndex: 0, cardIndex: 1, cardName: "8D"}]),
                score: 0,
                cardPairsRestCount: 1
            }, {type: actions.CLOSE_OR_DELETE_CARD, rowIndex, cardIndex})
        ).toEqual({
            cardRows: List([List([{rowIndex: 0, cardIndex: 0,cardName: "7D", flipped: true},
                {rowIndex: 0, cardIndex: 1, cardName: "8D", flipped: true}])]),
            openedCards: List([]),
            score: -42,
            cardPairsRestCount: 1
        })
    });

    it('возвращает состояние с 2мя закрытыми картами и счетом = NaN', () => {
        const rowIndex = 0,
            cardIndex = 0;

        expect(
            reducer({
                cardRows: List([List([{rowIndex: 0, cardIndex: 0,cardName: "7D", flipped: false},
                    {rowIndex: 0, cardIndex: 1, cardName: "8D", flipped: false}])]),
                openedCards: List([{rowIndex: 0, cardIndex: 1, cardName: "8D"}]),
                score: -999999,
                cardPairsRestCount: 1
            }, {type: actions.CLOSE_OR_DELETE_CARD, rowIndex, cardIndex})
        ).toEqual({
            cardRows: List([List([{rowIndex: 0, cardIndex: 0,cardName: "7D", flipped: true},
                {rowIndex: 0, cardIndex: 1, cardName: "8D", flipped: true}])]),
            openedCards: List([]),
            score: NaN,
            cardPairsRestCount: 1
        })
    });

    it('возвращает состояние с 2мя удаленными из игры картами', () => {
        const rowIndex = 0,
            cardIndex = 0;

        expect(
            reducer({
                cardRows: List([List([{rowIndex: 0, cardIndex: 0,cardName: "8D", guessed: false},
                    {rowIndex: 0, cardIndex: 1, cardName: "8D", guessed: false}])]),
                openedCards: List([{rowIndex: 0, cardIndex: 1, cardName: "8D"}]),
                score: 0,
                cardPairsRestCount: 1
            }, {type: actions.CLOSE_OR_DELETE_CARD, rowIndex, cardIndex})
        ).toEqual({
            cardRows: List([List([{rowIndex: 0, cardIndex: 0,cardName: "8D", guessed: true},
                {rowIndex: 0, cardIndex: 1, cardName: "8D", guessed: true}])]),
            openedCards: List([]),
            score: 42,
            cardPairsRestCount: 0
        })
    });

    it('возвращает состояние с полученными картами', () => {
        const cardRows = List([
            List([{},{}]),
            List([{},{}])
        ]);

        expect(
            reducer({}, {type: actions.SHOW_CARDS, cardRows})
        ).toEqual({
            cardRows: cardRows,
            score: 0,
            cardPairsRestCount: ROW_COUNT * COLUMN_COUNT / 2,
            openedCards: List([{}, {}]),
            pageName: "game",
            children: [
                <RestartContainer key = 'restart-container'/>,
                <ScoreContainer key = "score-container"/>,
                <CardsContainer key = "cards-container"/>
            ]
        })
    });

    it('возвращает состояние со всеми закрытыми картами', () => {
        const cardRows = List([
            List([{flipped: false}, {flipped: false}]),
            List([{flipped: false}, {flipped: false}])
        ]);

        const cardRowsExpected = List([
            List([{flipped: true}, {flipped: true}]),
            List([{flipped: true}, {flipped: true}])
        ]);

        expect(
            reducer({
                cardRows: cardRows,
                openedCards: List([{}, {}])
            },
                {type: actions.HIDE_CARDS})
        ).toEqual({
            cardRows: cardRowsExpected,
            openedCards: List([])
        })
    });
});