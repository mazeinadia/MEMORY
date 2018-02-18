import React from 'react';
import PropTypes from 'prop-types';
import {
    PATH_TO_CARDS,
    BACK_NAME,
    EXTENSION} from "../../../globals";

const Card = ({cardIndex, rowIndex, cardName, flipped, guessed, onClick}) => {
    const keyImg = 'img' + rowIndex + cardIndex;
    const keyDiv = 'img-div' + rowIndex + cardIndex;
    const src = PATH_TO_CARDS + (flipped ? BACK_NAME : cardName) + EXTENSION;
    const dataTid = flipped ? "Card-flipped" : "Card";

    return (
        <div className="cards__cell" key={keyDiv}>
            <img key={keyImg}
                 id={keyImg}
                 className="card"
                 alt="Карта"
                 src={src}
                 data-tid={dataTid}
                 style={guessed ? {display: 'none'} : {}}
                 onClick={onClick}/>
        </div>
    );
};


Card.propTypes = {
    cardIndex: PropTypes.number.isRequired,
    rowIndex: PropTypes.number.isRequired,
    cardName: PropTypes.string.isRequired,
    flipped: PropTypes.bool.isRequired,
    guessed: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Card;