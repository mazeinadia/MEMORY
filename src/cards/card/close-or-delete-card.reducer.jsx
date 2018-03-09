import {List} from 'immutable'
import {
    SCORE_MULT,
    MIN_SCORE
} from '../../globals'

function closeOrDeleteCard(state, action) {
    let openedCards = [
        state.openedCards.get(0),
        state.cardRows.get(action.rowIndex).get(action.cardIndex)
        ],
        deletingEnabled = openedCards[0].cardName === openedCards[1].cardName,
        newScore = calculateNewScore(state.score, deletingEnabled, state.cardPairsRestCount),
        cardPairsRestCount = (deletingEnabled) ? (state.cardPairsRestCount - 1) : state.cardPairsRestCount;

    return Object.assign({}, state, {
        cardRows: state.cardRows.map((cardRow, rowIndex) => {
            if (openedCards[0].rowIndex === rowIndex || openedCards[1].rowIndex === rowIndex) {
                return cardRow.map((card, cardIndex) => {
                    if ((openedCards[0].cardIndex === cardIndex && openedCards[0].rowIndex === rowIndex) ||
                        (openedCards[1].cardIndex === cardIndex && openedCards[1].rowIndex === rowIndex)
                    ) {
                        return changeCardProperty(card, deletingEnabled)
                    }
                    return card
                })
            }
            return cardRow
        }),
        openedCards: List([]),
        score: newScore,
        cardPairsRestCount: cardPairsRestCount
    })
}

function changeCardProperty (card, deletingEnabled) {
    if (deletingEnabled) {
        return Object.assign({}, card, {
            guessed: true
        })
    } else {
        return Object.assign({}, card, {
            flipped: true
        })
    }
}

function calculateNewScore (score, deletingEnabled, cardPairsRestCount) {
    let newScore = score;
    if (!isNaN(score)) {
        newScore += SCORE_MULT * cardPairsRestCount * (deletingEnabled ?  1 : -1);
        if (newScore < MIN_SCORE) {
            newScore = NaN
        }
    }
    return newScore
}

export default closeOrDeleteCard