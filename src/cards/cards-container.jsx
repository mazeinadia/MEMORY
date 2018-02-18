import React from 'react';
import {connect} from 'react-redux';
import Cards from "./cards-component.jsx";
import {cardClick} from "../app/actions";

const mapStateToProps = state => {
    return {
        cardRows: state.cardRows,
        openedCards: state.openedCards,
        cardPairsRestCount: state.cardPairsRestCount
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onCardClick: (indexRow, indexCard, openedCards, cardPairsRestCount) => {
            dispatch(cardClick(indexRow, indexCard, openedCards, cardPairsRestCount))
        }
    }
};

const CardsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
) (Cards);

export default CardsContainer;