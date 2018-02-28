import {
    COLUMN_COUNT,
    ROW_COUNT
} from "../../globals";
import {List} from "immutable";

function convertIntToCard(cardNumber)
{
    let cardValue = Math.floor(cardNumber / 4);
    switch (cardValue) {
        case 1: cardValue = 'J'; break;
        case 10: cardValue = 'Q'; break;
        case 11: cardValue = 'K'; break;
        case 12: cardValue = 'A';
    }

    let suit = cardNumber % 4;
    switch (suit){
        case 0: suit = 'C'; break;
        case 1: suit = 'D'; break;
        case 2: suit = 'H'; break;
        case 3: suit = 'S'; break;
    }

    return (cardValue + suit);
}

function cardDistribution(cardsCount)
{
    let cardsArray = [], cardsChosen = [], cardNumber;
    for (let i = 0; i < cardsCount; i++) {
        cardsArray [i] = -1;
    }
    for (let i = 0; i < cardsCount / 2; i++) {
        cardsChosen [i] = -1;
    }
    let freeElement = cardsCount - 2;
    for (let i = 0; i < cardsCount / 2; i++)
    {
        do {
            cardNumber = Math.floor(Math.random() * 52);
        } while(cardsChosen.indexOf(cardNumber) !== -1);
        cardsChosen[i] = cardNumber;

        let j = i;
        while (cardsArray[j] !== -1) {
            j++;
        }
        cardsArray[j] = cardNumber;

        let secondPlaceSteps = Math.floor(Math.random() * freeElement + 1);
        while(secondPlaceSteps !== 0) {
            if (cardsArray[j] === -1) {
                secondPlaceSteps--;
            }
            j++;
        }
        cardsArray[j - 1] = cardNumber;
        freeElement = freeElement - 2;
    }
    return cardsArray;
}

export function getCardRows () {

    let cardsCount = ROW_COUNT * COLUMN_COUNT,
        cardRow = List([]),
        rowIndex = 0,
        cardIndex = 0,
        cardRows = List([]);

    const CardNamesArray = cardDistribution(cardsCount).map(cardIntValue => convertIntToCard(cardIntValue));

    for (let i = 0; i < cardsCount; i++) {
        cardRow = cardRow.push(
            {
                cardIndex: cardIndex,
                rowIndex: rowIndex,
                cardName: CardNamesArray[i],
                flipped: false,
                guessed: false
            }
        );
        if (cardIndex === COLUMN_COUNT - 1) {
            cardRows = cardRows.push(cardRow);
            rowIndex++;
            cardIndex = -1;
            cardRow = List([]);
        }
        cardIndex++;
    }
    return cardRows;
}