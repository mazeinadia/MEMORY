import {cardDistribution, convertIntToCard} from "./card-service";
import {List} from "immutable";
import React from 'react';
import ScoreContainer from "../score/score-container.jsx";
import CardsContainer from "./cards-container.jsx";
import RestartContainer from "../restart/restart-container.jsx";
import {
    ROW_COUNT,
    COLUMN_COUNT
} from '../../globals';

export default function () {

    const CardArray = cardDistribution(ROW_COUNT * COLUMN_COUNT);
    let cardsCount = CardArray.length,
        cardRow = List([]),
        rowIndex = 0,
        cardIndex = 0,
        cardRows = List([]);

    for (let i = 0; i < cardsCount; i++) {
        const cardName =  convertIntToCard(CardArray[i]);
        cardRow = cardRow.push(
            {
                cardIndex: cardIndex,
                rowIndex: rowIndex,
                cardName: cardName,
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

    return {
        cardRows: cardRows,
        score: 0,
        cardPairsRestCount: ROW_COUNT * COLUMN_COUNT / 2,
        openedCards: List([{}, {}]),
        pageName: "game",
        children: [
            <RestartContainer key = 'restart-container'/>,
            <ScoreContainer key = "score-container"/>,
            <CardsContainer key = "cards-container"/>
        ]
    };
}