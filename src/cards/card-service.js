export function convertIntToCard(cardNumber)
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

export function cardDistribution(cardsCount)
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