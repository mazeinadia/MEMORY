import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Card from '../card/card-component.jsx';

const CardRow = ({cardRow, rowNumber, onCardClick, openedCards, cardPairsRestCount}) => {
    const keyValue = 'div-row' + rowNumber;
    return (
        <div className="cards__row" key={keyValue}>
            {
                cardRow.map((card, index) => (
                        <Card key={index}
                             {...card}
                             onClick={() => onCardClick(rowNumber, index, openedCards, cardPairsRestCount)}/>
                    )
                )
            }
        </div>
    );
};

CardRow.propTypes = {
    cardRow: ImmutablePropTypes.list.isRequired,
    onCardClick: PropTypes.func.isRequired
};

export default CardRow;