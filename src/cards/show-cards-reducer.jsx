import {List} from "immutable";
import React from 'react';
import ScoreContainer from "../score/score-container.jsx";
import CardsContainer from "./cards-container.jsx";
import RestartContainer from "../restart/restart-container.jsx";
import {
    ROW_COUNT,
    COLUMN_COUNT
} from '../../globals';

export default function (action) {
    return {
        cardRows: action.cardRows,
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