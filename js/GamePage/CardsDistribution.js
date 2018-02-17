import {cardsNumber} from "./variables";
export let CardsArray;
export function newCardDistribution() {
    CardsArray = cardDistribution(cardsNumber);
}

function cardDistribution(cardsNumber)
{
    let cardsArray = [], cardsChosen = [];
    for (let i = 0; i < cardsNumber; i++){cardsArray [i] = -1;}
    for (let i = 0; i < cardsNumber/2; i++){cardsChosen [i] = -1;}
    let freeElement = 16;
    for (let i = 0; i < 9; i++)
    {
        let cardNumber = Math.floor(Math.random() * 52);
        while(cardsChosen.indexOf(cardNumber)!== -1)
            cardNumber = Math.floor(Math.random() * 52);
        cardsChosen[i] = cardNumber;
        let j = 0;
        while (cardsArray[j]!==-1)
            j++;
        cardsArray[j] = cardNumber;
        let secondPlaceSteps = Math.floor(Math.random() * freeElement + 1);
        while( secondPlaceSteps !==0)
        {
            if (cardsArray[j] ===-1){secondPlaceSteps--;}
            j++;
        }
        cardsArray[j-1] = cardNumber;
        freeElement = freeElement - 2;
    }
    return cardsArray;
}