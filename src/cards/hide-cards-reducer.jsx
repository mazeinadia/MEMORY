import {List} from "immutable";

export default function (state) {
    return Object.assign({}, state, {
        cardRows: state.cardRows.map((cardRow) => {
            return cardRow.map((card) => {
                return Object.assign({}, card, {
                    flipped: true
                });
            })
        }),
        openedCards: List([])
    });
}