export function convertIntToCard(cardNumber)
{
    const dirPath = 'assets/cards/';
    let cardValue = Math.floor(cardNumber/4);
    switch (cardValue){
        case 1: cardValue = 'J'; break;
        case 10: cardValue = 'Q'; break;
        case 11: cardValue = 'K'; break;
        case 12: cardValue = 'A';
    }
    let suit = cardNumber%4;
    switch (suit){
        case 0: suit = 'C'; break;
        case 1: suit = 'D'; break;
        case 2: suit = 'H'; break;
        case 3: suit = 'S'; break;
    }

    return (dirPath + cardValue + suit + '.png');
}