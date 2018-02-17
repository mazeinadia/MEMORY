import React from "react";
import {subFromScore} from "../text/text__score/text__score.jsx";
import {addToScore} from "../text/text__score/text__score.jsx";
import {CardsArray} from "../js/GamePage/CardsDistribution";
import {convertIntToCard} from "../js/GamePage/CardConvertation";
import {endGame} from "../js/EndPage/app.jsx";

let cardsPairRest, oneCardsClicked, cardsClicked, score;

export function renewVariables() {
    cardsPairRest = 9;
    oneCardsClicked = false;
    cardsClicked = [];
    score = 0;
}

export class Card extends React.Component
{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        if(cardsClicked.length < 2) {
            const id = e.target.id;
            if (cardsClicked[0] !== id) {
                const cardPosition = id.substring(3, id.length);
                const cardNumber = CardsArray[cardPosition];
                e.target.src = convertIntToCard(cardNumber);
                cardsClicked.push(id);
                if (oneCardsClicked === false) {
                    oneCardsClicked = true;
                } else {
                    setTimeout(checkPair, 1000, cardsClicked[0], cardsClicked[1], this);
                }
            }
        }
    }

    render(){
        return <img
            key = {this.props.keyValue}
            id = {this.props.keyValue}
            className = "card"
            alt = "Карта"
            onClick = {this.handleClick}
        />;
    }
}

function checkPair(cardId1, cardId2, obj)
{
    const position1 = cardId1.substring(3, cardId1.length);
    const position2 = cardId2.substring(3, cardId2.length);
    if (CardsArray[position1] === CardsArray[position2]){
        document.getElementById(cardId1).remove();
        document.getElementById(cardId2).remove();
        score = addToScore(score, cardsPairRest);
        obj.props.onClick(score);
        cardsPairRest--;
        if (cardsPairRest === 0) endGame(score);
    }else{
        document.getElementById(cardId1).src = "../../assets/cards/back.png";
        document.getElementById(cardId2).src = "../../assets/cards/back.png";
        score = subFromScore(score, cardsPairRest);
        obj.props.onClick(score);
    }
    oneCardsClicked = false;
    cardsClicked = [];
}