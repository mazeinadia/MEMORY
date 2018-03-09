import React from 'react'
import PropTypes from 'prop-types'

const Score = ({value}) => (
    <div className='text text__score text_size_small'>
        <label key='score-text'>Очки: </label>
        <label key='score' data-tid='Menu-scores'>{value}</label>
    </div>
);

Score.propTypes = {
    value: PropTypes.number.isRequired
};

export default Score