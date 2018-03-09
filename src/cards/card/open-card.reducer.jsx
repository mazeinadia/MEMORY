function openCard(state, action) {
    return Object.assign({}, state, {
        cardRows: state.cardRows.map((cardRow, rowIndex) => {
            if (action.rowIndex === rowIndex) {
                return cardRow.map((card, cardIndex) => {
                    if (action.cardIndex === cardIndex) {
                        return Object.assign({}, card, {
                            flipped: false
                        })
                    }
                    return card
                })
            }
            return cardRow
        }),
        openedCards: state.openedCards.push(state.cardRows.get(action.rowIndex).get(action.cardIndex))
    })
}

export default openCard