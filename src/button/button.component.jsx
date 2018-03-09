import React from 'react'
import PropTypes from 'prop-types'

const Button = ({value, onButtonClick, dataTid}) => {
    const className = 'button button__' + ((dataTid === 'NewGame-startGame') ? 'start' : 'end');
    return (
        <input key='button'
           className={className}
           type='submit'
           name='StartGame'
           value={value}
           onClick={onButtonClick}
           data-tid={dataTid}/>
)};

Button.propTypes = {
    value: PropTypes.string.isRequired,
    onButtonClick: PropTypes.func.isRequired,
    dataTid: PropTypes.string.isRequired
};

export default Button

