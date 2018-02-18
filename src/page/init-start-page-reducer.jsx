import React from 'react';
import ButtonContainer from "../button/button-container.jsx";
import ImageContainer from '../image/image-container.jsx';

function initiateStartPageState () {
    return{
        pageName: "start",
        children: [
            <ImageContainer key = "img-start"/>,
            <ButtonContainer value = "start" dataTid = "NewGame-startGame" key = "button-start"/>
        ],
        cardRows: [],
        score: 0,
        cardPairsRestCount: 9,
        openedCards: []
    }
}

export default initiateStartPageState;