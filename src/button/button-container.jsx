import React from 'react';
import {connect} from 'react-redux';
import Button from './button-component.jsx'
import {startGame} from "../app/actions";

const mapDispatchToProps = dispatch => {
    return {
        onButtonClick: () => {
            dispatch(startGame())
        }
    }
};

const ButtonContainer = connect(
    undefined,
    mapDispatchToProps
) (Button);

export default ButtonContainer;
