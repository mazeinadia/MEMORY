import React from 'react'
import PropTypes from 'prop-types'
import {PATH_TO_ASSERTS} from "../globals"

const Image = ({pageName}) => {
    const imgSrc = PATH_TO_ASSERTS + ((pageName === 'start') ? 'StartGame.png' : 'Group2.png');
    const altText = (pageName === 'start') ? 'Добро пожаловать!' : 'Всего доброго!';
    const className = 'image image__' + pageName;
    return (
        <img className={className} key='img' alt={altText} src={imgSrc}/>
    )
};


Image.propTypes = {
    pageName: PropTypes.string.isRequired,
};

export default Image