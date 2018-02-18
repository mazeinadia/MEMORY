/*
* action types
*/

export const OPEN_CARD = 'OPEN_CARD';
export const CLOSE_CARD = 'CLOSE_CARD';
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
        type: CLOSE_CARD,
        rowIndex,
        cardIndex
    }
}

export function endGame() {
    return {
        type: END_GAME
    }
}

export function showCards () {
    return {
        type: SHOW_CARDS
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

export function cardClick (rowIndex, cardIndex, openedCards, cardPairsRestCount) {
    return function (dispatch) {
        if (openedCards.size === 0) {
            dispatch(openCard(rowIndex, cardIndex));
        }

        if (openedCards.size === 1) {
            if (rowIndex !== openedCards.get(0).rowIndex || cardIndex !== openedCards.get(0).cardIndex) {
                dispatch(openCard(rowIndex, cardIndex));

                if (cardPairsRestCount === 1) {
                    setTimeout(checkEnd, 1000, rowIndex, cardIndex);
                } else {
                    setTimeout(dispatch, 1000, closeOrDeleteCard(rowIndex, cardIndex));
                }
            }

            function checkEnd(rowIndex, cardIndex) {
                dispatch(closeOrDeleteCard(rowIndex, cardIndex));
                dispatch(endGame());
            }
        }
    }
}

let timeOutId = 0;
export function startGame () {
    clearTimeout(timeOutId);
    return function (dispatch) {
        dispatch(showCards());
        timeOutId = setTimeout(dispatch, 5000, hideCards());
    }
}

