import  React from 'react';
import PropTypes from 'prop-types';

const Score = ({value}) => (
    <label className = "text text__score text_size_small" key = "score"
           data-tid = "Menu-scores">{value}</label>
);

Score.propTypes = {
    value: PropTypes.number.isRequired
};

export default Score;