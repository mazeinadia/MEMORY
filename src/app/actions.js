import {getCardRows} from '../cards/cards.service'

/*
* action types
*/

export const OPEN_CARD = 'OPEN_CARD';
export const CLOSE_OR_DELETE_CARD = 'CLOSE_OR_DELETE_CARD';
export const SHOW_CARDS = 'SHOW_CARDS';
export const HIDE_CARDS = 'HIDE_CARDS';
export const END_GAME = 'END_GAME';
export const LOAD_START_PAGE = 'LOAD_START_PAGE';

/*
* action creators
*/

export function openCard(rowIndex, cardIndex) {
    return {
        type: OPEN_CARD,
        rowIndex,
        cardIndex
    }
}

export function closeOrDeleteCard(rowIndex, cardIndex) {
    return {
        type: CLOSE_OR_DELETE_CARD,
        rowIndex,
        cardIndex
    }
}

export function endGame() {
    return {
        type: END_GAME
    }
}

export function showCards (cardRows) {
    return {
        type: SHOW_CARDS,
        cardRows
    }
}

export function hideCards () {
    return {
        type: HIDE_CARDS
    }
}

export function loadStartPage() {
    return {
        type: LOAD_START_PAGE
    }
}

/*
* thunks
*/

let timeOutId = 0;
const delay = (ms) => new Promise(resolve => {
    clearTimeout(timeOutId);
    timeOutId = setTimeout(resolve, ms);
    return timeOutId
});

export function cardClick (rowIndex, cardIndex, openedCards, cardPairsRestCount) {
    return function (dispatch) {
        if (openedCards.size === 0) {
            dispatch(openCard(rowIndex, cardIndex))
        }

        if (openedCards.size === 1) {
            if (rowIndex !== openedCards.get(0).rowIndex || cardIndex !== openedCards.get(0).cardIndex) {
                dispatch(openCard(rowIndex, cardIndex));

                if (cardPairsRestCount === 1) {
                    return delay(1000).then(() => {
                        dispatch(closeOrDeleteCard(rowIndex, cardIndex));
                        dispatch(endGame())
                    })
                } else {
                    return delay(1000).then(() => {
                        dispatch(closeOrDeleteCard(rowIndex, cardIndex))
                    })
                }
            }
        }
    }
}

export function startGame () {
    return function (dispatch) {
        dispatch(showCards(getCardRows()));
        return delay(5000).then(() => {
            dispatch(hideCards())
        })
    }
}