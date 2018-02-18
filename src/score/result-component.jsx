import  React from 'react';
import PropTypes from 'prop-types';

const Result = ({score}) => (
    <div className = "text text_end-title">
        <span key = "span-end">Итоговый счет: </span>
        <span key = "span-end-key">{score}</span>
    </div>
);

Result.propTypes = {
    score: PropTypes.number.isRequired
};

export default Result;