import React from 'react'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'
import CardRow from './card-row/card-row.component.jsx'

const Cards = ({cardRows, onCardClick, openedCards, cardPairsRestCount}) => {
    return (
        <div className='cards' key='div-cards' data-tid='Deck'>
            {
                cardRows.map((cardRow, index) => (
                    <CardRow key={index}
                             cardRow={cardRow}
                             rowNumber={index}
                             openedCards={openedCards}
                             cardPairsRestCount={cardPairsRestCount}
                             onCardClick={onCardClick}/>
                ))
            }
        </div>
    );
};

Cards.propTypes = {
    cardRows: ImmutablePropTypes.list.isRequired,
    onCardClick: PropTypes.func.isRequired,
    openedCards: ImmutablePropTypes.list.isRequired
};

export default Cards;