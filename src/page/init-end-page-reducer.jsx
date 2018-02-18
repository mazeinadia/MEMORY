import React from 'react';
import {List} from "immutable";
import ButtonContainer from "../button/button-container.jsx";
import ImageContainer from '../image/image-container.jsx';
import Result from '../score/result-component.jsx';

function isGameEnded(state) {
    if (state.cardPairsRestCount !== 0) {
        return state;
    }
    return {
        pageName: "end",
        children: [
            <ImageContainer key = "img-end"/>,
            <Result score = {state.score} key = "result-score"/>,
            <ButtonContainer value = "again" dataTid = "EndGame-retryGame" key = "button-again"/>
        ],
        cardRows: List([]),
        score: 0,
        cardPairsRestCount: 0,
        openedCards: List([])
    }
}

export default isGameEnded;