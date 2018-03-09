import React from 'react'
import PropTypes from 'prop-types'

const Restart = ({onRestartClick}) => (
    <a className='text text_size_small text__back'
       data-tid='Menu-newGame'
       onClick={onRestartClick}>Начать заново</a>
);

Restart.propTypes = {
    onRestartClick: PropTypes.func.isRequired
};

export default Restart