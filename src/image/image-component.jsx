import React from 'react';
import PropTypes from 'prop-types';

const Image = ({pageName}) => {
    const imgSrc = "../assets/" + ((pageName === "start") ? "StartGame.png" : "Group2.png");
    const altText = (pageName === "start") ? "Добро пожаловать!" : "Всего доброго!";
    return (
        <img className="image" key="img" alt={altText} src={imgSrc}/>
    );
};


Image.propTypes = {
    pageName: PropTypes.string.isRequired,
};

export default Image;