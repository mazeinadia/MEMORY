import ReactDOM from "react-dom";
import React from 'react';
import {ContentGame} from "../../content/content__game/content__game.jsx";
import {cardsNumber} from "./variables";
import {CardsArray, newCardDistribution, newDistribution} from "./CardsDistribution";
import {convertIntToCard} from "./CardConvertation";
import {renewVariables} from "../../card/card.jsx";

function showCards(){
    for(let i = 0; i < cardsNumber; i++){
        const cardId = 'img'+i;
        const cardNumber = CardsArray[i];
        document.getElementById(cardId).src = convertIntToCard(cardNumber);
    }
}

function hideCards(){
    for(let i = 0; i < cardsNumber; i++){
        const cardId = 'img'+i;
        document.getElementById(cardId).src = "assets/cards/back.png";
    }
}

export function loadField() {
    newCardDistribution();
    renewVariables();
    ReactDOM.render(<ContentGame/>, document.getElementById('app'));
    showCards();
    setTimeout(hideCards, 5000);
}

