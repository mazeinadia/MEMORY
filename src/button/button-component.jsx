import React from 'react';
import PropTypes from 'prop-types';

const Button = ({value, onButtonClick, dataTid}) => (
    <input key = "button"
           className = "button"
           type = "submit"
           name = "StartGame"
           value = {value}
           onClick = {onButtonClick}
           data-tid = {dataTid}/>
);

Button.propTypes = {
    value: PropTypes.string.isRequired,
    onButtonClick: PropTypes.func.isRequired,
    dataTid: PropTypes.string.isRequired
};

export default Button;

